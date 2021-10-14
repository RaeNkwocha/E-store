import React, { useEffect, useState } from "react";

const Exploredetail = ({ match }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    )
      .then((res) => res.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    fetchData();
    console.log(match, "heyy");
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h3>{item.strMeal}</h3>
            <img src={item.strMealThumb} width="100%"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Exploredetail;
