import React, { Suspense } from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Skills from './Skills';
import Footer from './Footer';
import WorkExperience from './WorkExperience';

export const App = () => {
  return (
    <Suspense fallback={'...loading'}>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
        <WorkExperience />
      </main>
      <footer>
        <Footer />
      </footer>
    </Suspense>
  );
};
