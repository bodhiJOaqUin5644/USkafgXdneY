// 代码生成时间: 2025-11-01 21:42:30
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义购物车内商品的类型
const ProductType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number
});

// 购物车组件
const ShoppingCart = () => {
  // 使用useState Hook管理购物车内商品
  const [cart, setCart] = useState([]);

  // 添加商品到购物车
  const addToCart = (product) => {
    const newCart = cart.some(item => item.id === product.id) ? cart.map(item =>
      item.id === product.id ? {...item, quantity: item.quantity + 1} : item
    ) : [...cart, {...product, quantity: 1}];
    setCart(newCart);
  };

  // 渲染购物车商品列表
  const renderCart = () => {
    return cart.map(item => (
      <div key={item.id}>
        <p>{item.title} - ${item.price} - Quantity: {item.quantity}</p>
      </div>
    ));
  };

  // 清空购物车
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {renderCart()}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

// 定义ShoppingCart组件的propTypes
ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(ProductType),
  onAddToCart: PropTypes.func
};

export default ShoppingCart;
