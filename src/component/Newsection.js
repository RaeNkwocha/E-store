import React from "react";
import gridne from "../images/grid-1.jpg";
import gridtwo from "../images/box-3.jpg";
import gridthree from "../images/grid-3.jpg";
import "../css/newsection.css";

const Newsection = () => {
  return (
    <>
      <section className="grid--2">
        <div className="newsection-grid">
          <div className="box-1">
            <h1>Always Try To Eat Healthy</h1>
            <h5>
              May help you live longer Keeps skin, teeth, and eyes healthy
              Supports muscles Boosts immunity Strengthens bones Lowers risk of
              heart disease, type 2 diabetes, and some cancers Supports healthy
              pregnancies and breastfeeding Helps the digestive system function
              <br />
              <br />
              Helps achieve and maintain a healthy weight May help you live
              longer. Keeps skin, teeth, and eyes healthy. Supports muscles.
              Boosts immunity. Strengthens bones. Lowers risk of heart disease,
              type 2 diabetes, and some cancers. Supports healthy pregnancies
              and breastfeeding. Helps the digestive system function.
            </h5>
            <img
              style={{ marginTop: "30px" }}
              width="100%"
              alt=""
              src={gridthree}
            ></img>
          </div>
          <div className="box-2">
            <img width="100%" alt="" src={gridne}></img>
            <img width="100%" alt="" src={gridtwo}></img>
          </div>
        </div>

        <div className="neu"></div>
      </section>
    </>
  );
};

export default Newsection;
