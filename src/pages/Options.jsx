import React from "react";

export default function Options() {
  return (
    <div className="home-card">
      <h2>Options</h2>

      <div className="options-grid">
        <a
          className="option-card"
          href="/CV_JessicaPerdomo.pdf"
          download
        >
          📄
          <span>Download CV</span>
        </a>

        <a
          className="option-card"
          href="https://codeforces.com/profile/darkssmoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧩
          <span>Codeforces</span>
        </a>


        <a
          className="option-card"
          href="https://judge.beecrowd.com/profile/574417"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧩
          <span>Beecrowd</span>
        </a>

        {/*
        <a
          className="option-card"
          href="LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          🏆
          <span>Marathon Certificates</span>
        </a>
        */}

      </div>
    </div>
  );
}
