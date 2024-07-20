// src/components/Main.js

import React from 'react';
import { content } from '../content';
import './Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <section id="about">
        <h2>{content.about.title}</h2>
        <p>{content.about.description}</p>
      </section>
      <section id="projects">
        <h2>{content.projects.title}</h2>
        <p>{content.projects.description}</p>
      </section>
    </main>
  );
};

export default Main;
