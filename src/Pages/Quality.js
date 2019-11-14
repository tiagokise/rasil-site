import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import jumbotronQuality from '../img/jumbotronQuality.jpg';
import QualityCardList from '../Components/QualityCardList';


export default function Quality() {

    return (
        <>
            <Jumbotron 
                label="Nosso processo produtivo conta com a  própria fábrica de compostos"
                imgURL={jumbotronQuality} />
            <div className="container">
                <QualityCardList />  
            </div>
        </>               
    );
}
