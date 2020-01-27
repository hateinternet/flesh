import React from 'react';

import './tag.css';

const Tag = () => {
  return (
    <div className="tag">
      <span className="tag__text">made by </span>
      <a className="tag__link" href="https://github.com/hateinternet" target="_blank" rel="noopener noreferrer">hateinternet</a>
    </div>
  );
};

export default Tag;
