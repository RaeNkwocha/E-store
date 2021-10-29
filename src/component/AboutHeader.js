import React from "react";
import Fade from "react-reveal/Fade";

import "../pages/css/about.css";
import Contactme from "./Contactme";

const AboutHeader = () => {
  return (
    <>
      <main
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <header className="header---2">
          <header className="about--header">
            <h3>ABOUT ME</h3>
            <h5>
              I have a Knack for designing, creating and presenting functional
              digital products that exceed expectations, meet user needs and
              business demands.
            </h5>
          </header>
          <main className="about---grid">
            <div className="grid--box"></div>
            <div>
              <h3>I Create Products Not Just Art.</h3>
              <h5>
                Hello there! I’m a Product and Interactions designer, I have a
                Knack for designing, creating and presenting functional digital
                products that exceed expectations, meet user needs and business
                demands. I have worked with startups, collaborated with teams of
                larger organizations, and I'm currently working in a team of
                Product designers for a software company that creates
                multi-faceted products with varying complexities and
                functionalities.
              </h5>
              <br></br>
              <h5>
                I Implement Design Thinking, which enables me design intuitive,
                effective and functional user interfaces while maintaining
                premium aesthetics, my designs are also heavily influenced by
                research of a wide demographic of users and their frustrations
                and this has ultimately resulted in good reviews from users of
                the products.
              </h5>
            </div>
          </main>
          <section>
            <Contactme></Contactme>
          </section>
        </header>
        <div className="container">
          <div className="gallery">
            <Fade left>
              <figure className="gallery__item gallery__item--1">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="gallery__img"
                />
              </figure>
            </Fade>
            <Fade top>
              <figure className="gallery__item gallery__item--2">
                <img
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="gallery__img"
                />
              </figure>
            </Fade>
            <Fade right>
              <figure className="gallery__item gallery__item--3">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="gallery__img"
                />
              </figure>
            </Fade>
            <figure className="gallery__item gallery__item--4">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="gallery__img"
              />
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutHeader;
