import React, { useState } from "react";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    })
      .then((response) => response.json())
      .then((data) => alert("Item added successfully!"));
  };

  return (
    <>
      <div className="fluid-container mt-5">
        <div className="container justify-content-center">
          <div className="maintitile ">
            <h2>Add a New Item</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              class="form-control"
              type="text"
              placeholder="Items Name"
              aria-label="default input example"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              class="form-control"
              type="number"
              placeholder="Price"
              aria-label="default input example"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
