import React from "react";
import pizzaone from "../images/pizza-one.jpg";
import pizzatwo from "../images/pizza-two.jpg";
import pizzathree from "../images/pizza-three.jpg";
import pizzafour from "../images/pizza-four.jpg";
import Fade from "react-reveal/Fade";

import "../css/headertwo.css";

const HeaderTwo = () => {
  return (
    <>
      <section style={{ background: "#32cd32" }} className="just--bg">
        <section className="header-two-grid">
          <div className="header-two">
            <h2>Quattro Formaggi</h2>
            <h5>
              The average slice of pizza contains 12 grams of protein. Protein
              is an essential component of good health. Protein is what helps
              you to gain muscle, and make hair, blood, connective tissue,
              antibodies, enzymes, and more. Without enough protein in your
              diet, you’d start getting sick quite often. While everyone’s daily
              requirement for protein differs based on their body type and
              activity levels, it’s important to make sure that you are getting
              enough. One delicious way to do this is through pizza! The average
              slice contains 12 grams, which is a great way to get the protein
              you need while enjoying a delicious meal.{" "}
            </h5>
          </div>
          <div className="container">
            <div className="gallery">
              <Fade left>
                <figure className="gallery__item gallery__item--1">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Gallery image 1"
                    class="gallery__img"
                  />
                </figure>
              </Fade>
              <Fade top>
                <figure className="gallery__item gallery__item--2">
                  <img
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Gallery image 2"
                    class="gallery__img"
                  />
                </figure>
              </Fade>
              <Fade right>
                <figure className="gallery__item gallery__item--3">
                  <img
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Gallery image 3"
                    class="gallery__img"
                  />
                </figure>
              </Fade>
              <figure className="gallery__item gallery__item--4">
                <img
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Gallery image 4"
                  class="gallery__img"
                />
              </figure>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeaderTwo;
