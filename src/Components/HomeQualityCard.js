import React from 'react';

export default function HomeQualityCard({ title, texts, certifieds }) {
  return (
    <div className="homeQualityCard">
      <h4 className="homeQualityTitle">{title}</h4>
      {texts.map(text => <p className="homeQualityText" >{text}</p> )}
      {certifieds && certifieds.map(certified => 
        <div className="certifiedBox">
          <img className="certifiedImage" src={certified.imgURL} alt={certified.title}/>
          <p className="certifiedLabel">{certified.label}</p>
        </div>
      )}
    </div>
  );
}