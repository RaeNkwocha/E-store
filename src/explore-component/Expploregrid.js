import React, { useEffect, useState } from "react";
import "../explore-css/exploremain.css";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  FormGroup,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import "../explore-css/exploredetail.css";

const Exploregrid = ({ fetchSearch, search, display }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, [search]);
  console.log(data);

  return (
    <>
      <main className="explore-main-1">
        <main>
          <h5 className="top">Top searches</h5>
          {display.length > 0 ? (
            <section className="explore-flex-1">
              {display.map((item) => {
                return (
                  <Link to={`/explore/${item.idMeal}`}>
                    <div
                      key={item.idMeal}
                      sx={{ maxWidth: 345 }}
                      className="detailed-grid"
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
                    </div>
                  </Link>
                );
              })}
            </section>
          ) : (
            <CircularProgress></CircularProgress>
          )}
        </main>
      </main>
    </>
  );
};

export default Exploregrid;
