import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import "../explore-css/explore.css";
import Button from "@mui/material/Button";

import SimpleBottomNavigation from "../component/Bottomnav";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <>
      {/* <nav className="explore-nav">
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
            {data.map((item) => {
              return (
                <div key={item.strCategory}>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      style={{ cursor: "pointer" }}
                      label={item.strCategory}
                      clickable
                      onClick={() => setStringName(item.strCategory)}
                    >
                      {item.strCategory}
                    </Chip>
                  </Stack>
                </div>
              );
            })}
          </div>
          <div className="border-2"></div> */}
      <section className="explore-flex-3">
        {categories &&
          categories.map((item) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/explore/${item.idMeal}`}
              >
                <div
                  key={item.idMeal}
                  sx={{ maxWidth: 345 }}
                  style={{ height: "400px", marginTop: "-50px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={item.strMealThumb}
                    // style={{ width: "350px" }}
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
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </div>
              </Link>
            );
          })}
      </section>
      {/* </section>
      </section> */}

      <div className="bottom-nav">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    </>
  );
};

export default Categories;
