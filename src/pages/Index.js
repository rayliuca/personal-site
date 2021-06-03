import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    title="Seeking Data Science and Software Opportunities"
    description={"Ray Liu's personal website. New graduate from"
    + ' the University of Alberta, Electrical and Computer Engineering Department.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Some things about me and projects I did for fun
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link> {' '}
        and <Link to="/resume">resume</Link>. {' '}
      </p>
      <p> Also, I am currently seeking data science or software engineering opportunities. {' '}
        Please <a href="mailto:ray@rayliu.ca">contact</a> me if you know any :)
      </p>
    </article>
  </Main>
);

export default Index;
