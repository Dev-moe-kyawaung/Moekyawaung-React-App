// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import AppCollection from '../components/AppCollection';
import GitHubCollections from '../components/GitHubCollections';
import LovableLinks from '../components/LovableLinks';
import MailCollections from '../components/MailCollections';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certificates />
      <AppCollection />
      <GitHubCollections />
      <LovableLinks />
      <MailCollections />
      <Contact />
    </>
  );
};

export default Home;
