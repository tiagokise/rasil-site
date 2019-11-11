import React from 'react';

export default function QualityCard({ imgURL, title, items, numbers }) {
  return (
    <>
    <div className="qualityCardImage">
      <div className="qualityImage"
          style={{ backgroundImage: `url(${imgURL})` }}>
      </div>
    </div>
    <div className="qualityCard">
      <div className="qualityNumberDiv">
        {numbers.map(number => 
        <p className="qualityNumber">{number}</p>)}
      </div>
      <div className="qualityPageInfo">
          <div className="qualityPageItem">
            <h2 className="qualityTitle">{title}</h2>
            {items.map(item => <p className="qualityText">{item}</p>)}
          </div>
      </div>
    </div>
    </>
  );
}