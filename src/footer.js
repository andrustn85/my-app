import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
     return (
          <footer className="foot"> 
 <i> GitHub <FaGithubSquare /> </i>  
 <i> Twitter <FaTwitterSquare /> </i>
 <i> Linkedin <FaLinkedin /> </i>
<i> Instagram <FaInstagramSquare /> </i>
<h3> Lets go for a _ < FaCoffee /> _ ? </h3>
          </footer>
     )};
