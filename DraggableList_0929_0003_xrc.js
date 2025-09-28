// 代码生成时间: 2025-09-29 00:03:05
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const getItemStyle = (isDragging, draggableStyle) => {
  return {
    ...draggableStyle,
    cursor: 'move',
  };
};

const DraggableList = ({ items }) => {
  // State to manage the list of items
  const [list, setList] = useState(items);

  // Ref to track the list container
  const listRef = useRef(null);

  // Define drop target
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'draggable',
    hover(item, monitor) {
      if (!listRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = listRef.current.childElementCount - 1;
      const hoverBoundingRect = listRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverIndex + 0.5) * hoverBoundingRect.height;

      if (dragIndex === hoverIndex) return;
      // Only perform the drop if the hoverIndex is greater than the dragIndex
      if (dragIndex < hoverIndex && hoverMiddleY < monitor.getClientOffset().y) {
        return;
      }// Allow drop only if the dragIndex is less than the hoverIndex
      if (dragIndex > hoverIndex && hoverMiddleY > monitor.getClientOffset().y) {
        return;
      }
      setList((prevState) =>
        update(prevState, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, item.id]],
        }),
      );
    },
    collect: (monitor) => (
      {
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }
    ),
  );

  // Render each item with drag capabilities
  return (
    <TransitionGroup>
      {list.map((item, index) => (
        <CSSTransition
          key={item.id}
          timeout={200}
          classNames='item'
        >
          <div
            ref={(dropZone, monitor) => {
              drop(monitor);
            }}
            className='dnd-item'
            style={getItemStyle(
              isOver && canDrop,
              {
                transform: isDragging ? 'translate3d(0px, 0px, 0px)' : 'none',
              },
            )}
          >
            {item.content}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

DraggableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DraggableList;
