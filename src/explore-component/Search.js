import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {
  Bookmark,
  ChevronLeft,
  GitHub,
  Home,
  HomeOutlined,
  Instagram,
  Menu,
  Person,
  RoomServiceOutlined,
  Web,
  Work,
} from "@material-ui/icons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";
import { Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import Exploresearch from "./Exploresearch";
import Footer from "../component/Footer";
import Exploregrid from "./Expploregrid";

const Search = ({ display, setDisplay }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [stringName, setStringName] = useState("");
  const [categories, setCategories] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [detail, setDetail] = useState([]);

  const history = useHistory();
  const onClick = () => {
    history.push("/explore");
  };
  const handleChip = (item) => {
    setStringName(item.strCategory);
    fetchCategories();
  };
  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearch();
  };
  const fetchCat = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => res.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.log("error"));
  };
  const fetchCategories = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${stringName}`)
      .then((res) => res.json())
      .then((result) => setCategories(result.meals))
      .catch((error) => console.log("error"));
  };
  const fetchSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((result) => setDisplay(result.meals))
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    fetchCategories();
    fetchCat();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [stringName]);

  return (
    <div>
      <nav className="explore-nav">
        <div className="explore-flex">
          {" "}
          <div className="menu">
            {" "}
            <ChevronLeft
              style={{
                color: "#32cd32",
                cursor: "pointer",
                marginLeft: "0px",
                fontSize: "2.3rem",
              }}
              onClick={onClick}
            ></ChevronLeft>
          </div>
          <div>
            <h3>raenFoodexplore</h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <form
              style={{ display: "grid", placeItems: "center" }}
              className="search"
              onSubmit={handleSearch}
            >
              <TextField
                value={search}
                style={{ padding: "10px" }}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                label="search for a recipe"
                id="fullWidth"
              />
            </form>
          </Box>
          <input
            type="submit"
            style={{
              marginLeft: "-75px",
              padding: "8px",
              borderRadius: "4px",
              height: "33px",
              border: "none",
            }}
            onClick={handleSearch}
          />
        </div>
        <div className="explore-flex-2">
          <div>
            <Bookmark
              style={{ color: "#32cd32", cursor: "pointer" }}
            ></Bookmark>
          </div>
          <div>
            <Person style={{ color: "#32cd32", cursor: "pointer" }}></Person>{" "}
          </div>
          <div>
            <Instagram
              style={{ color: "#32cd32", cursor: "pointer" }}
            ></Instagram>{" "}
          </div>
          <div>
            <GitHub
              style={{
                color: "#32cd32",
                cursor: "pointer",
              }}
            ></GitHub>{" "}
          </div>
        </div>
      </nav>
      <div className="border"></div>
      <section className="explore-nav-2">
        <section className="detail-grid">
          <div className="grid-style">
            {detail.map((item) => {
              return (
                <div className="grid-style-2">
                  <img
                    src={item.strMealThumb}
                    height="400px"
                    width="100%"
                  ></img>
                  <div className="inner--grid">
                    <h2>{item.strMeal}</h2>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        gap: "0.5rem",
                      }}
                    >
                      <div>
                        <h5>{item.strArea}</h5>
                      </div>
                      <div>
                        <h5 style={{}}>{item.strCategory}</h5>
                      </div>
                      <div>
                        {/* <a
                          href={item.strYoutube}
                          target="_blank"
                          style={{ marginRight: "20px" }}
                        >
                          youTube
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="inst">
                    <h5>
                      {item.strInstructions}
                      <span style={{ float: "right" }}>
                        <a href={item.strSource} target="_blank">
                          {item.strSource}
                        </a>
                      </span>
                    </h5>
                  </div>
                </div>
              );
            })}
            {display && display.length ? (
              display.map((item) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/explore/${item.idMeal}`}
                  >
                    <div
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
                        {/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
                      </CardActions>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h5>result not found</h5>
            )}{" "}
          </div>
          <div>
            <div className="chip-1">
              {data.map((item) => {
                return (
                  <div key={item.strCategory}>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        style={{ cursor: "pointer" }}
                        label={item.strCategory}
                        clickable
                        onClick={(e) => handleChip(item)}
                        type="button"
                      />
                    </Stack>
                  </div>
                );
              })}
            </div>
            <div className="border-2"></div>
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
            </section>
          </div>
        </section>
      </section>
      {/* <div className="bottom-nav">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Search;
