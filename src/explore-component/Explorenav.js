import {
  Bookmark,
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
import Categories from "./Categories";
import { useHistory } from "react-router";

const Explorenav = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stringName, setStringName] = useState("");
  const history = useHistory();
  const [display, setDisplay] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // const filter = (btn) => {
  //   const filterData = cat.filter((item) => item.strCategory === btn);
  //   setChip(filterData);
  // };
  const fetchData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((result) => setData(result.categories))
      .catch((error) => console.log("error"));
  };
  const fetchCategories = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${stringName}`)
      .then((res) => res.json())
      .then((result) => setCategories(result.meals))
      .catch((error) => console.log("error"));
  };
  console.log(categories, "hello");

  const fetchSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((result) => setDisplay(result.meals))
      .catch((error) => console.log("error"));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearch();
  };
  const handleNav = () => {
    setOpen(!open);
  };
  const handleChip = (item) => {
    setStringName(item.strCategory);
  };

  console.log(open, "open");
  useEffect(() => {
    fetchData();
    fetchCategories();
  }, [stringName]);
  return (
    <>
      <nav className="explore-nav">
        <div className="explore-flex">
          {" "}
          <div className="menu">
            {" "}
            <div className={open ? "explore-block" : null}></div>
            <Menu
              style={{
                color: "#32cd32",
                cursor: "pointer",
                marginLeft: "0px",
              }}
              onClick={handleNav}
            ></Menu>
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
        {open ? (
          <div className="explore-block">
            <div style={{ cursor: "pointer" }}>
              {" "}
              <HomeOutlined></HomeOutlined>
              <h3>Home</h3>
            </div>
            <div style={{ cursor: "pointer" }}>
              {" "}
              <Work></Work>
              <h3>About</h3>
            </div>
            <div style={{ cursor: "pointer" }}>
              {" "}
              <RoomServiceOutlined></RoomServiceOutlined>
              <h3>Services</h3>
            </div>
            <div style={{ cursor: "pointer" }} style={{ cursor: "pointer" }}>
              {" "}
              <Web></Web>
              <h3>Portfolio</h3>
            </div>
          </div>
        ) : null}

        <section>
          <div className="chip">
            <Chip label="all" onClick={() => setStringName("")} clickable />
            {data.map((item) => {
              return (
                <div key={item.strCategory}>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      style={{ cursor: "pointer" }}
                      label={item.strCategory}
                      clickable
                      onClick={() => handleChip(item)}
                    >
                      {item.strCategory}
                    </Chip>
                  </Stack>
                </div>
              );
            })}
          </div>
          <div className="border-2"></div>
          <Exploremain
            categories={categories}
            stringName={stringName}
            search={search}
            display={display}
            handleSearch={handleSearch}
            fetchSearch={fetchSearch}
          ></Exploremain>{" "}
        </section>
      </section>

      <div className="bottom-nav">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    </>
  );
};

export default Explorenav;
