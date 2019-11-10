import React from 'react';

function Jumbotron({label, imgURL}) {

  return (
    <div 
      className="jumbotron" 
      style={{backgroundImage: `url(${imgURL})`}}
    >
      <h1>{label}</h1>
    </div>
  );
}

export default Jumbotron;
