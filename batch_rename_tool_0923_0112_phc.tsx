// 代码生成时间: 2025-09-23 01:12:29
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the types for file array and rename callback
interface FileRenameProps {
  files: File[];
  onRename: (files: File[]) => void;
}

// Define the types for state and actions
interface BatchRenameToolState {
  newName: string;
}

const BatchRenameTool: React.FC<FileRenameProps> = ({ files, onRename }) => {
  const [state, setState] = useState<BatchRenameToolState>({
    newName: '',
  });

  // Function to handle the change of the new file name
  const handleNewNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      newName: event.target.value,
    });
  };

  // Function to perform the batch file rename
  const renameFiles = () => {
    const renamedFiles = files.map(file => (
      {
        ...file,
        name: state.newName,
      }
    ));
    onRename(renamedFiles);
  };

  return (
    <div>
      <input
        type="text"
        value={state.newName}
        onChange={handleNewNameChange}
        placeholder="Enter new file name"
      />
      <button onClick={renameFiles}>Rename All</button>
    </div>
  );
};

// PropTypes or TypeScript type definitions
BatchRenameTool.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
  onRename: PropTypes.func.isRequired,
};

export default BatchRenameTool;
