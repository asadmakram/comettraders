import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './header.scss';
import Routes from './Routes';

import reactLogo from './assets/React-icon.png';


const App = () => (
  <BrowserRouter>
    <main>
      <div>

        <div className="header">
          <a href="#default" className="logo"><div>Comet</div> <div>Traders</div></a>
          <div className="header-right">
            <a className="active" href="/">Home</a>
            <a href="#contact" href="/contact">Contact</a>
            <a href="#about" href="/about">About</a>
          </div>
        </div>

        {/* <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p> */}
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
