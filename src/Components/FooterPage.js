import React from 'react'
import FacebookLogo from '../img/logofacebookwhitetype.png';
import InstaLogo from '../img/logoinstawhite.png';




function FooterPage() {
    return (
      <>        
        <div className="footerDiv">
          <p className="footerP1">Rasil Borrachas. Atuando há mais de 30 anos no mercado de artefatos de borracha.
          </p>
          <p className="footerP2">Contato:  55 (0**11) 4712-4597 / 4712-9104
          </p>
          <p className="footerP2">Endereço: Rua Quintino Bocaiúva, 1283 - São Roque – São Paulo – Brasil
          </p>
         
          <ul className="LinksFooter">
            <li><a href="#">Home</a></li>
            <li><a href="#">Qualidade</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Representantes</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div className="iconesRedesSociais">
            <a target="_blank" href="#"><img className="facelogo" src={FacebookLogo} alt='Facebook'/></a>
            <a target="_blank" href="#"><img className="instalogo" src={InstaLogo} alt='Instagram'/></a>
          </div>

        </div>
                     
       </>          

    );
}
    
export default FooterPage;