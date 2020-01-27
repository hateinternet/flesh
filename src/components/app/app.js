import React from 'react';

import Header from '../header';
import Gallery from '../gallery';
import Cities from '../cities';
import Socials from '../socials';
import Tag from '../tag';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <div className="app__content">
          <Gallery />
          <Cities />
          <Socials />
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default App;
