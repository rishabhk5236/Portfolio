import React from 'react';
import { TypeAnimation } from "react-type-animation";
import introCardImg from "../Resources/Homepage/namasteLogo.png";

export default function Introcard() {
  
  // Logic to calculate age dynamically
  const calculateAge = (birthDateString) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If the current month is before the birth month, 
    // or it's the birth month but the day hasn't happened yet, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const myAge = calculateAge("2003-10-15");

  const greetData = [
    "Hello Dear", 1000,
    "नमस्ते जी", 1000,
    "ਹੈਲੋ ਜੀ", 1000,
    "வணக்கம் ஜி", 1000,
    "नमस्कार जी", 1000,
    "હેલો જી", 1000,
  ];

  const rolesData = [
    "I'm a Full Stack Developer", 1000,
    "I'm an Android Developer", 1000,
    "I'm a React.Js Developer", 1000,
    "I'm a Programmer", 1000,
    "I'm a Graphic Designer", 1000,
  ];


  return (
    <div className="card introCard my-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body mb-0 text-white">
            <h5 className="card-title">
              <TypeAnimation
                sequence={greetData}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h5>
            <div className="card-text">
              I'm <p className="name">Rishabh Kanaujiya</p>
            </div>

            <p className="card-text">
              {/* Dynamic Age applied here */}
              I'm <span style={{ color: "red" }}>{myAge}</span> years old
            </p>

            <div className="roles">
              <TypeAnimation
                sequence={rolesData}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>

            <p className="description">
              -I'm a programming enthusiast who seeks for code in every
              existing thing. Welcome to the digital version of myself,
              you'll find everything about me in this portal. Please don't
              forget to share your feedback to me.
              <br />-Thank you (Rishabh)
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <img src={introCardImg} className="img-fluid rounded-start" alt="Namaste Logo" />
        </div>
      </div>
    </div>
  );
}