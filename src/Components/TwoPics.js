import React from 'react';
import Image2 from '../img/soldaPic.jpg';
import Image3 from '../img/roloPic.jpg';


function TwoPics() {
  return (
    <>
    
    <div className="twopics">
        <div className="solda">
            <img src={Image2} alt='Solda' />
        </div>
         <div className="roloPic">
            <img src={Image3} alt='Rolo' />
        </div>
    </div>


    </>
  );
}

export default TwoPics;
