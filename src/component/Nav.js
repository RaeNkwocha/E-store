import { Facebook, Instagram, YouTube } from "@material-ui/icons";
import "../css/nav.css";
import React from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="hamburger">
        <Hamburger></Hamburger>
      </div>
      <nav className="nav">
        <h3>Raen.Recipies</h3>
        <div className="grid">
          <ul>
            <li>Home</li>
            <li>About</li>
            <Link
              to="/explore"
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              <li>Explore</li>
            </Link>
            <li>Our servies</li>
          </ul>
        </div>

        <ul>
          <li>
            <Instagram style={{ color: "#030e12" }}></Instagram>
          </li>
          <li>
            <YouTube style={{ color: "#030e12" }}></YouTube>
          </li>
          <li>
            <Facebook
              style={{ color: "#030e12", marginRight: "20px" }}
            ></Facebook>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
