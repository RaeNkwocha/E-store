import React from "react";
import pizzaone from "../images/pizza-one.jpg";
import pizzatwo from "../images/pizza-two.jpg";
import pizzathree from "../images/pizza-three.jpg";
import pizzafour from "../images/pizza-four.jpg";
import "../css/headertwo.css";

const HeaderTwo = () => {
  return (
    <>
      <section style={{ background: "#32cd32", padding: "30px" }}>
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
          <div className="inner-grid">
            <div className="grid-column-1">
              {" "}
              <img src={pizzaone} alt=""></img>
            </div>
            <div className="grid-column-2">
              <img src={pizzatwo} alt=""></img>
            </div>
            <div className="grid-column-3">
              <img src={pizzathree} alt=""></img>
            </div>
            <div className="grid-column-4">
              {" "}
              <img src={pizzafour} alt=""></img>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeaderTwo;
