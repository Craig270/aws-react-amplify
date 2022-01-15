import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      strings: [
        "Web Developer.",
        "Person.",
        "Father.",
        "Software Developer.",
        "Husband.",
        "Friend.",
        "Cloud Architect.",
        "Coach.",
        "Learner.",
        "Mentor.",
        "Designer.",
      ],
      loop: true,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/betterBigMe.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there,</h2>
          <h1>I'm Craig Neff!</h1>
          <p>
            {" "}
            a Developer, Learner and Father living in Denver, Colorado.
            Currently I am learning front end development working with React and
            AWS. Currently I am a full time stay at home Dad for my two
            wonderful boys and amazing Wife. In my free time I enjoy working on
            personal React projects or practicing my JavaScript coding on the
            website{" "}
            <a href="https://www.codewars.com/users/Craig270">Code Wars.com!</a>
          </p>
          <h3>
            Striving to be a better <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
