import React, { useEffect, useState } from "react";
import burger from "../images/burger.png";
import fruit from "../images/fruit.jpg";
import "../css/section.css";

const Section = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((result) => setData(result.categories))
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <section style={{ display: "grid", placeItems: "center" }}>
        <div className="section-grid">
          <div className="image-holder">
            <img src={burger} alt=""></img>
          </div>
          <div className="section-text">
            <h2>Pretty Bigger burger</h2>
            <h5>
              {" "}
              Basically, it prevents weight gain and enhances your fat loss by
              improving the metabolism of the body. Each and every cell has
              protein. It is an essential compound in your body which help you
              to keep your body active and productive
            </h5>
            <button className="btn btn-default btn-lg btn3d">
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
        <div className="section-grid">
          <div className="section-text">
            <h2>Pretty Bigger burger</h2>
            <h5>
              {" "}
              Basically, it prevents weight gain and enhances your fat loss by
              improving the metabolism of the body. Each and every cell has
              protein. It is an essential compound in your body which help you
              to keep your body active and productive
            </h5>
            <button className="btn btn-default btn-lg btn3d">
              {" "}
              Add To Cart
            </button>
          </div>
          <div className="image-holder-2">
            <img src={fruit} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
