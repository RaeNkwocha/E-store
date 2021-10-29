import React, { useState } from "react";
import "animate.css/animate.min.css";

// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {
  Bookmark,
  GitHub,
  HomeOutlined,
  Instagram,
  Menu,
  Person,
  RoomServiceOutlined,
  Web,
  Work,
} from "@material-ui/icons";
import "./css/about.css";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";
import AboutHeader from "../component/AboutHeader";
import Footer from "../component/Footer";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const About = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [open, setOpen] = useState(true);
  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="explore-nav">
        <div className="explore-flex">
          {" "}
          <div className="menu">
            {" "}
            <div className={open ? "explore-block" : null}></div>
            <Menu
              style={{
                color: "#32cd32",
                cursor: "pointer",
                marginLeft: "0px",
              }}
              onClick={handleNav}
            ></Menu>
          </div>
        </div>
      </nav>
      <div className="border"></div>
      <section className="explore-nav-2">
        {open ? (
          <div className="explore-block">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {" "}
                <HomeOutlined></HomeOutlined>
                <h3>Home</h3>
              </div>
            </Link>
            <div
              style={{
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
            >
              {" "}
              <Work></Work>
              <h3>About</h3>
            </div>
            <div
              style={{
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
            >
              {" "}
              <RoomServiceOutlined></RoomServiceOutlined>
              <h3>Services</h3>
            </div>
            <a
              href="https://raenewsblog.netlify.app/"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {" "}
                <Web></Web>
                <h3>Portfolio</h3>
              </div>
            </a>
          </div>
        ) : null}
        <AboutHeader></AboutHeader>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
