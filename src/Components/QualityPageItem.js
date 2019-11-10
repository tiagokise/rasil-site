import React from 'react';

function QualityPageItem({ imgURL, title, items, numbers}) {

  return (
    <>
    <div className="qualitypicimg" 
      style={{backgroundImage: `url(${imgURL})`}}>
    </div>
    <div className="qualityNumberDiv">
    {numbers.map(number => 
      <p className="qualityNumber">{number}</p> )}
    </div>
    <div className="qualitypageInfo">
      <div className="qualitypageitem">
        <h2 className="qualityH2">{title}</h2>
        {items.map(item => <p className="qualityp">{item}</p> )}
      </div>
      </div>
</>
  );
}

export default QualityPageItem;
