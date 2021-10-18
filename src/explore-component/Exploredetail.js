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
import React, { useEffect, useState } from "react";
import "../explore-css/explore.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";
import { Chip } from "@material-ui/core";
import Exploremain from "./Exploremain";
import SimpleBottomNavigation from "../component/Bottomnav";
import "../explore-css/exploredetail.css";
import Exploregrid from "./Expploregrid";
import Footer from "../component/Footer";
import Exploresearch from "./Exploresearch";
import { useHistory } from "react-router";

const Exploredetail = ({ match }) => {
  const [detail, setDetail] = useState([]);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const history = useHistory();
  const onClick = () => {
    history.push("/explore");
  };
  const fetchData = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    )
      .then((res) => res.json())
      .then((result) => setDetail(result.meals))
      .catch((error) => console.log("error"));
  };
  const fetchSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((result) => setDisplay(result.meals))
      .catch((error) => console.log("error"));
  };
  const fetchCat = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => res.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.log("error"));
  };
  const handleSearch = (event) => {
    event.preventDefault();

    fetchSearch();
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
    fetchCat();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(match, "heyy");
  }, [match.params.id]);
  console.log(data);
  return (
    <>
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

            <Exploresearch></Exploresearch>
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
                      />
                    </Stack>
                  </div>
                );
              })}
            </div>
            <div className="border-2"></div>
            <Exploregrid
              search={search}
              display={display}
              handleSearch={handleSearch}
              fetchSearch={fetchSearch}
            ></Exploregrid>{" "}
          </div>
        </section>
      </section>
      {/* <div className="bottom-nav">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div> */}
      <Footer></Footer>
    </>
  );
};

export default Exploredetail;
