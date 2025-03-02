import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{listStyleType: 'none'}}>
            <div class="card">
              <div class="card-body">{item.name} - ${item.price}{" "}</div>
            </div>
            
            <button
              onClick={() => removeFromCart(index)}
              className="btn btn-outline-danger"
              style={{marginTop: '8px'}}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
