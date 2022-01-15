import React, { useState } from "react";
import "./Header.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export default function Header() {
  return (
    <div className="header">
      <nav></nav>
      <h4>
        <a href="https://www.linkedin.com/in/craig-neff" target="_blank">
          <BsLinkedin /> LinkedIn
        </a>
      </h4>
      <h4>
        <a href="https://github.com/Craig270" target="_blank">
          <BsGithub /> GitHub
        </a>
      </h4>
      <h4>
        <a href="https://www.instagram.com/mr_neff126/" target="_blank">
          <BsInstagram /> Instagram
        </a>
      </h4>
    </div>
  );
}
