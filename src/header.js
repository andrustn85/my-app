import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
        <img alt="yo" src="../Imagenes/imgnordhavn.jpeg" />
<h1> Andres R </h1>
<h2> React Developer </h2>
<a className="link" href="https://devandres.netlify.app/#home" target="_blank" rel="noopener noreferrer" > Portfolio 2.0 </a>
<button className="email">  <i> Email <AiOutlineMail /> </i> </button>
        </div>
    )};


