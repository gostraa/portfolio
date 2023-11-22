import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <MyProjects />
      </main>
    </>
  );
};
