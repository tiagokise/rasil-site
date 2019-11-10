import React from 'react';

function QualityCard({ title, items }) {
  return (
    <div className="qualityCard">
      <h2>{title}</h2>
      {items.map(item => <p>{item}</p> )}
    </div>
  );
}

export default QualityCard;
