import React, { useState, useEffect } from "react";

const ItemListing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  };

  return (
    <div>
      <div className="container">
        <h2>Items for Sale</h2>
        {items.map((item) => (
          <div key={item.id}>
            <div class="card">
              <div class="card-body">
                {item.name} <br /> Price: ${item.price}
              </div>
            </div>
            <button className="btn btn-outline-primary" onClick={() => addToCart(item)} style={{marginTop: '8px'}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListing;
