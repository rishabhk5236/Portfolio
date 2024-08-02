import React from "react";
import xLogo from "../Resources/Navbar/x twitterLogo.png";
import githubLogo from "../Resources/Navbar/githubLogo.png";
import linkedinLogo from "../Resources/Navbar/linkedinLogo.png";

import "../CSS/Navbar.css";


export default function Navbar() {
  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg">
          
          <div className="container-fluid">
            <p className="navbar-brand">Rishabh Kanaujiya</p>
          </div>
          
          

          <div className="d-flex social-media">
            
            <a href="https://twitter.com/Maihurishabh" target="_blank" rel="noreferrer">
              <img src={xLogo} alt="." />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-kanaujiya-49643a222/"
              target="_blank" rel="noreferrer"
            >
              <img src={linkedinLogo} alt="." />
            </a>
            <a href="https://github.com/rishabhk5236" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="." />
            </a>
          </div>

          
        </nav>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">

        <div className="d-flex social-media">
            
            <a href="https://twitter.com/Maihurishabh" target="_blank" rel="noreferrer">
              <img src={xLogo} alt="." />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-kanaujiya-49643a222/"
              target="_blank" rel="noreferrer"
            >
              <img src={linkedinLogo} alt="." />
            </a>
            <a href="https://github.com/rishabhk5236" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="." />
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
