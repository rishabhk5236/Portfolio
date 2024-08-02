import React from 'react'
import { TypeAnimation } from "react-type-animation";
import introCardImg from "../Resources/Homepage/namasteLogo.png";

export default function Introcard() {

   
    const greetData = [
        "Hello Dear",
        1000,
        "नमस्ते जी",
        1000,
        "ਹੈਲੋ ਜੀ",
        1000, //punjabi
        "வணக்கம் ஜி",
        1000, //tamil
        "नमस्कार जी",
        1000, //marathi
        "હેલો જી",
        1000, //gujrati
      ];
    
      //   this data is to know about me
      const rolesData = [
        "I'm a Full Stack Developer",
        1000,
        "I'm an Android Developer",
        1000,
        "I'm a React.Js Developer",
        1000,
        "I'm a Programmer",
        1000,
        "I'm a Graphic Designer",
        1000,
      ];

     
      

  return (
    
    //    card 
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
              <span className="card-text">
                I'm
                <p className="name">Rishabh Kanaujiya</p>
              </span>

              <p className="card-text">
                I'm <span style={{ color: "red" }}>20</span> years old
              </p>
              <p className="roles">
                <TypeAnimation
                  sequence={rolesData}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>

              <p className="description">
                
                -I'm a programming enthusiast who seeks for code in every
                existing thing. Welcome to the digital version of myself ,
                you'll find everything about me in this portal. Please don't
                forget to share your feedback to me.
                <br></br>-Thank you(Rishabh)
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={introCardImg} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
    </div>
  )
}
