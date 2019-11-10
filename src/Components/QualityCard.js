import React from 'react';

export default function QualityCard({ title, texts, certifieds }) {
  return (
    <div className="qualityCard">
      <h4 className="qualityTitle">{title}</h4>
      {texts.map(text => <p className="qualityText" >{text}</p> )}
      {certifieds && certifieds.map(certified => 
        <div className="certifiedBox">
          <img className="certifiedImage" src={certified.imgURL} alt={certified.title}/>
          <p className="certifiedLabel">{certified.label}</p>
        </div>
      )}
    </div>
  );
}