import React from 'react';
import './gallery.css';

import image1 from '../../assets/img/1.jpg';
import image2 from '../../assets/img/2.jpg';
import image3 from '../../assets/img/3.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__img-wrap gallery__img-wrap--touch">
        <img className="gallery__img" src={image1} alt="FLESH" />
      </div>
      <div className="gallery__img-wrap">
        <img className="gallery__img" src={image2} alt="FLESH" />
      </div>
      <div className="gallery__img-wrap">
        <img className="gallery__img" src={image3} alt="FLESH" />
      </div>
    </div>
  );
}

export default Gallery;
