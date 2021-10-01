import React, { useEffect, useState } from "react";
import "../css/header.css";
import image from "../images/vegetable.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <section className="header-grid">
          <div className="grid-1">
            <p>NOW TAKING ONLINE ORDERS</p>
            <h1>salmin</h1>
            <h5>
              Restaurant style Yogurt Mint Sauce is delicious dip which is quick
              and easy to... This is a standard Indian mint chutney served with
              poppadums along with mint and lemon
            </h5>
            <button className="btn btn-default btn-lg btn3d">
              {" "}
              Add To Cart
            </button>
            <button className="btn btn-default btn-lg btn3d">
              {" "}
              Book a Table
            </button>
          </div>
          <div className="grid-2">
            <img width="100%" src={image} alt=""></img>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
