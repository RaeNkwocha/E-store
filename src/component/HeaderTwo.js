import React from "react";
import pizzaone from "../images/pizza-one.jpg";
import pizzatwo from "../images/pizza-two.jpg";
import pizzathree from "../images/pizza-three.jpg";
import pizzafour from "../images/pizza-four.jpg";
import pizzafive from "../images/pizza-five.jpg";
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

            {/* <img src={pizzafive}></img> */}
          </div>
        </section>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#32cd32"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
    </>
  );
};

export default HeaderTwo;
