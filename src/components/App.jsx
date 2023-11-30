import React, { Suspense } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

export const App = () => {
  return (
    <Suspense fallback={"...loading"}>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
      </main>
      <footer>
        <Footer />
      </footer>
    </Suspense>
  );
};
