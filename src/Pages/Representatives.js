import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import JumbotronRepresentatives from '../img/jumbotronRepresentative.jpg';
import RepresentativesInfo from '../Components/RepresentativesInfo';
import RepresentativesMapSp from '../Components/RepresentativesMapSp';
import RepresentativesAddress from '../Components/RepresentativesAddress';

export default function Representatives() {
    return (
        <>
            <Jumbotron 
                label="Conheça os representantes Rasil Borrachas espalhados pelo Brasil"
                imgURL={JumbotronRepresentatives}
            />
            <div className="container">
                <RepresentativesInfo /> 
                <RepresentativesMapSp /> 
                <RepresentativesAddress />  
            </div>
            
        </>               
    );
}