import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <>
    <div className="fluid-container mt-5">
      <div className="container  d-flex flex-column ">
        <div className="maintitle d-flex justify-content-center">
          <h1>Welcome to RandoStore</h1>
        </div>
        <Link to="/add-item" className="no-underline">
          <div className="card">
            <div className="card-body">
              <h6 class="card-title"> Add Items</h6>
            </div>
          </div>
        </Link>
        <Link to="/checkout" className="no-underline">
          <div className="card">
            <div className="card-body">
              <h6 class="card-title"> View Checkout</h6>
            </div>
          </div>
        </Link>

        <Link to="/items" className="no-underline">
          <div className="card">
            <div className="card-body">
              <h6 class="card-title"> View Items</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </>
);

export default Homepage;
