import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import jumbotronQuality from '../img/jumbotronQuality.jpg';
import QualityPageItemSet from '../Components/QualityPageItemSet';




function QualityPage() {
return (
            <>
            <Jumbotron 
                label="Nosso processo produtivo conta com a  própria fábrica de compostos"
                imgURL={jumbotronQuality} />
               

            <div className="container">
            <QualityPageItemSet />

        
            </div>
                
            </>               

        );
}
    
export default QualityPage;