import React from "react";
import Explorenav from "../explore-component/Explorenav";

const Explore = ({ display, setDisplay }) => {
  return (
    <>
      <nav>
        <Explorenav display={display} setDisplay={setDisplay}></Explorenav>
      </nav>
    </>
  );
};

export default Explore;
