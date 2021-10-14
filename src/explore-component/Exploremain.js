import React, { useEffect, useState } from "react";
import "../explore-css/exploremain.css";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Exploremain = ({ fetchSearch, search, display }) => {
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
    fetchSearch();
  }, [input, search]);
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  // if (data.length > 0) {
  //   data = data.filter((product) => {
  //     return product.strMeal.match(search);
  //   });
  // }
  return (
    <>
      <main className="explore-main">
        <main>
          <h5 className="top">Top searches</h5>

          <section className="explore-flex">
            {display && display.length ? (
              display.map((item) => {
                return (
                  <Link to={`/explore/${item.idMeal}`}>
                    <Card
                      key={item.idMeal}
                      sx={{ maxWidth: 345 }}
                      style={{ height: "400px" }}
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
                    </Card>
                  </Link>
                );
              })
            ) : (
              <h5>result not found</h5>
            )}
          </section>
        </main>
        <form className="search" onSubmit={handleSubmit}>
          {" "}
          <label>
            {" "}
            <h5 style={{ paddingTop: "5px", paddingBottom: "5px" }}>
              {" "}
              search by letter
            </h5>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search using letters"
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
          <>
            <CircularProgress></CircularProgress>
          </>
        ) : (
          <section className="explore-flex">
            {data &&
              data.map((item) => {
                return (
                  <Link to={`/explore/${item.idMeal}`}>
                    <Card
                      key={item.idMeal}
                      sx={{ maxWidth: 345 }}
                      style={{ height: "400px" }}
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
                    </Card>
                  </Link>
                );
              })}
          </section>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Exploremain;
