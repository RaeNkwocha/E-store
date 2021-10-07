import React, { useEffect, useState } from "react";
import "../css/categories.css";

const Categories = () => {
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
    <div style={{ position: "relative" }}>
      <section className="new">
        <h2 style={{ paddingBottom: "50px", fontSize: "4rem" }}>Categories</h2>
        <div className="categories">
          {data.map((data) => {
            return (
              <div>
                <div className="cat-holder">
                  <img width="100%" src={data.strCategoryThumb} alt=""></img>
                </div>
                {/* <h3>{data.strCategory}</h3> */}
                <button
                  style={{
                    backgroundColor: "transparent",
                    backgroundRepeat: "no-repeat",
                    color: "black",
                  }}
                  className="btn btn-default btn-lg btn3d"
                >
                  {data.strCategory}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#32cd32"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Categories;
