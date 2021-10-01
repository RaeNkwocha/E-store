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
    <div>
      <section>
        <h2>Categories</h2>
        <div className="categories">
          {data.map((data) => {
            return (
              <div className="cat-holder">
                <img width="100%" src={data.strCategoryThumb}></img>
                <button className="btn btn-default btn-lg btn3d">
                  {data.strCategory}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Categories;
