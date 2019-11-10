import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import jumbotronRepresentative from '../img/jumbotronRepresentative.jpg';
import MapPicture from '../img/MapPicture.JPG';


function Representative() {
return (
            <>
            <Jumbotron 
                label="Conheça os representantes Rasil Borrachas espalhados pelo Brasil"
                imgURL={jumbotronRepresentative}
            />
            <div className="container">
                <div className="representativesInfo">
                    <h1 className="h1Repres">Representantes</h1>
                    <h2 className="h2Repres">A Rasil Borrachas tem representantes em vários estados do Brasil para atender diversas  demandas. Confira os contatos de cada representante abaixo:</h2>          
                </div>
                <div className="representativeMapSp">
                    <img src={MapPicture} alt='Mapa São Paulo' />
                </div>
                <div className="representativeCity">
                    <h2 className="h2Map">Região São Paulo</h2>
                    <p className="pMap">
                    Nome: Vazquez Repr.man.Equip.LTDA
                    Contato: (11) 4347-9966 / 99846-9455
                    E-mail:  vazquezneto@uol.com.br
                    Endereço: Rua das Samambaias, 429 - 
                    Terra Nova I - Cep - 0920540 - 
                    São Bernardo do Campo - SP
                    </p>
                </div>
            </div>
                
            </>               

        );
}
    
export default Representative;