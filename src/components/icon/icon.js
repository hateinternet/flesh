import React from 'react';

import sprite from '../../assets/icons/sprite.svg';
import './icon.css';

const Icon = props => {
  const { name, width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      className={`icon icon-${name}`}>
        <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
}

export default Icon;
