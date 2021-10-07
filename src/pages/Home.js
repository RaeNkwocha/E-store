import React from "react";
import Categories from "../component/Categories";
import Header from "../component/Header";
import HeaderTwo from "../component/HeaderTwo";
import Main from "../component/Main";
import Nav from "../component/Nav";
import Newsection from "../component/Newsection";
import Section from "../component/Section";

const Home = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      {/* <nav>
        <Nav></Nav>
      </nav> */}
      <section>
        <Section></Section>
      </section>
      <section>
        <HeaderTwo></HeaderTwo>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Newsection></Newsection>
      </section>
    </>
  );
};

export default Home;
