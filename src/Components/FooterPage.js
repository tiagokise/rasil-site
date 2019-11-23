import React from 'react'
import FacebookLogo from '../img/logofacebookwhitetype.png';
import InstaLogo from '../img/logoinstawhite.png';




export default function FooterPage() {
  return (

    <footer className="footerPage">
      <p className="footerAddress">Rasil Borrachas. Atuando há mais de 30 anos no mercado de artefatos de borracha.
      <br></br>Contato:  55 (0**11) 4712-4597 / 4712-9104
      <br></br>Endereço: Rua Quintino Bocaiúva, 1283 - São Roque – São Paulo – Brasil</p>
      <div className="divRight">
        <ul className="linksFooter">
          <li><a href="#">Home</a></li>
          <li><a href="#">Qualidade</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Representantes</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <div className="iconesRedesSociais">
          <a target="_blank" href="#"><img className="faceLogo" src={FacebookLogo} alt='Facebook' /></a>
          <a target="_blank" href="#"><img className="instaLogo" src={InstaLogo} alt='Instagram' /></a>
        </div>
      </div>
    </footer>

  );
}