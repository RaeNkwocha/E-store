import React, { useEffect, useState } from "react";
import "../explore-css/exploremain.css";
import {
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../explore-css/exploredetail.css";

const Exploregrid = ({
  fetchSearch,
  search,
  display,
  categories,
  stringName,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, [search]);
  console.log(data);

  return (
    <>
      <main className="explore-main-1">
        <main>
          <h4 className="top">{stringName}</h4>

          <section className="explore-flex-1">
            {categories &&
              categories.map((item) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/explore/${item.idMeal}`}
                  >
                    <div key={item.idMeal} sx={{ maxWidth: 345 }}>
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
                      </CardContent>
                    </div>
                  </Link>
                );
              })}
            <h5 className="top">Top searches</h5>

            {display && display.length ? (
              display.map((item) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/explore/${item.idMeal}`}
                >
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
              ))
            ) : (
              <h5 style={{ textAlign: "center", fontSize: "2rem" }}>
                ...search not found
              </h5>
            )}
          </section>
        </main>
      </main>
    </>
  );
};

export default Exploregrid;
