import React from 'react';
import './body.css';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Works from './work/Works';
import Contact from './contact/Contact';

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='work'>
        <Works/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body