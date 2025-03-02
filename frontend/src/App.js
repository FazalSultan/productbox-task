import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ItemListing from "./Components/ItemListing";
import AddItem from "./Components/AddItem";
import Checkout from "./Components/Checkout";
import NavBar from "./Components/NavBar"

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items" element={<ItemListing />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
