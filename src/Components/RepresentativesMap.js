import React from 'react'
import MapPicture from '../img/MapPicture.JPG';



export default function RepresentativesMap() {
    return (
        <div className="representativesMap">
            <img className="representativesMapSP" src={MapPicture} alt='Mapa São Paulo' />
        </div>            
    );
}