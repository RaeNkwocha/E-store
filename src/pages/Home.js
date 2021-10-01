import React from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Nav from "../component/Nav";
import Section from "../component/Section";

const Home = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <nav>
        <Nav></Nav>
      </nav>
      <main>
        <Section></Section>
      </main>
    </>
  );
};

export default Home;
