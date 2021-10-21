import React, { useEffect, useState } from "react";
import "../explore-css/exploremain.css";
import { CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";
const Exploresearch = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("a");

  const fetchData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
      .then((res) => res.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    fetchData();
  }, [input]);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <>
      <main>
        <form className="search" onSubmit={handleSubmit}>
          {" "}
          <label>
            {" "}
            <h5
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                fontWeight: "bold",
              }}
            >
              {" "}
              search by letter
            </h5>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search using letters"
              style={{ backgroundColor: "whitesmoke" }}
            ></input>
          </label>
          <input type="submit" />
        </form>
        <h3
          style={{
            padding: "8px",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          {input}
        </h3>
        {data && data.length === 0 ? (
          <div>
            <h5>no result</h5>
          </div>
        ) : (
          <section className="explore-flex-3">
            {data &&
              data.map((item) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/explore/${item.idMeal}`}
                    key={item.idMeal}
                  >
                    <div
                      key={item.idMeal}
                      sx={{ maxWidth: 345 }}
                      style={{ height: "400px" }}
                      className="detailed-grid-1"
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={item.strMealThumb}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          style={{ fontSize: "1.2rem" }}
                          component="div"
                        >
                          {item.strMeal}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.strInstructions.substring(0, 120)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </div>
                  </Link>
                );
              })}
          </section>
        )}
      </main>
    </>
  );
};

export default Exploresearch;
