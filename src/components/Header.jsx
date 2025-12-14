import React from "react";
import { Link } from "react-router-dom";

import '../App.css';
import jess from "../assets/jess.jpg";

export default function Header() {
  return (
    <header className="header-app">

      <div className="header-content">
        <div className="avatar-wrapper">
          <img className="img_mine" src={jess} alt="Jessica" />
        </div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/options">OPTIONS</Link>
        </nav>
      </div>
    </header>
  );
}
