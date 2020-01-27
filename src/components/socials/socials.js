import React from 'react';
import Icon from '../icon';
import './socials.css';

const Socials = () => {
  return (
    <div className="socials">
      <a className="socials__link" href="https://music.apple.com/ru/artist/flesh/1254455931" target="_blank" rel="noopener noreferrer">
        <Icon name="music"/>
      </a>
      <a className="socials__link" href="https://www.instagram.com/fleshaudiopunk/" target="_blank" rel="noopener noreferrer">
        <Icon name="instagram"/>
      </a>
      <a className="socials__link" href="https://www.youtube.com/channel/UCQ0X1r0nrDcJTo-gXRcLsMA" target="_blank" rel="noopener noreferrer">
        <Icon name="youtube"/>
      </a>
    </div>
  );
}

export default Socials;
