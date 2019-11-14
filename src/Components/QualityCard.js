import React from 'react';

export default function QualityCard({ imgURL, title, text, number }) {
  return (
    <div className="qualityCard">
      <div className="qualityCardImg">
          <img src= {imgURL} alt={title}/>
      </div>
      <div className="qualityCardInfo">
        <span className="qualityNumber"> {number} </span>
        <h2 className="qualityTitle"> {title}</h2>
        <p className="qualityText"> {text} </p>
      </div>
      <div className="qualityLineDiv"></div>
    </div>
  );  
}