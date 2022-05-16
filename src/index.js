import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './header.js';
import About from './About.js';
import Interests from './Interests.js';
import Footer from './footer.js';
import Imagen from './Imagen.js';


function Page() {
  return (
      <div className="main">
          <Header />
          <About />
          <Interests />
          <Footer />
      </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

