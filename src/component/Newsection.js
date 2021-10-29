import React from "react";

import Fade from "react-reveal/Fade";

import "../css/newsection.css";

const Newsection = () => {
  return (
    <>
      <section className="grid--2">
        <div className="newsection-grid">
          <div className="box--1">
            <h3>Always Try To Eat Healthy</h3>
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
          </div>
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
        </div>

        <div className="neu"></div>
      </section>
    </>
  );
};

export default Newsection;
