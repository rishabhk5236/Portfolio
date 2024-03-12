import React from "react";
import gmailLogo from "../Resources/Navbar/gmailLogo.png";
import xLogo from "../Resources/Navbar/x twitterLogo.png";
import githubLogo from "../Resources/Navbar/githubLogo.png";
import linkedinLogo from "../Resources/Navbar/linkedinLogo.png";
import instaLogo from "../Resources/Navbar/instaLogo.png";
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <p class="navbar-brand">
            Rishabh Kanaujiya
          </p>
        </div>
       
  
       
        
      <div class="d-flex social-media">
          <span><img src={gmailLogo} alt="."/></span>
          <a href="https://www.instagram.com/mairishabhhu/" target="_blank"><img src={instaLogo} alt="." /></a>
          <a href="https://twitter.com/Maihurishabh" target="_blank"><img src={xLogo} alt="." /></a>
          <a href="https://www.linkedin.com/in/rishabh-kanaujiya-49643a222/" target="_blank"><img src={linkedinLogo} alt="."/></a>
          <a href="https://github.com/rishabhk5236" target="_blank"><img src={githubLogo} alt="." /></a>
        </div>



        
      </nav>










   
    </div>
  );
}
