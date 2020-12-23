import React from 'react'
import FacebookLogo from '../img/logofacebookwhitetype.png';
import InstaLogo from '../img/logoinstawhite.png';
import { useHistory } from 'react-router-dom';
import LogoRasil from './LogoRasil';

export default function FooterRasil() {
  const history = useHistory()
  const navItens = ([
    {name: "home", label: "Home"},
    {name: "qualidade", label: "Qualidade"},
    {name: "produtos", label: "Produtos"},
    {name: "representantes", label: "Representantes"},
    {name: "contato", label: "Contato"},
  ])

  return (
    <footer className="footerRasil">
      <div className="logoRasil"> <LogoRasil /></div>
      <p className="footerAddress">Rasil Borrachas. Atuando há mais de 30 anos no mercado de artefatos de borracha.
      <br></br>Contato:  55 (0**11) 4712-4597 / 4712-9104
      <br></br>Endereço: Rua Quintino Bocaiúva, 1283<br></br>São Roque – São Paulo – Brasil</p>
      <div className="divRight">
      <nav className="footerNav">
        <ul className="footerNavList">
          { navItens.map(navItem => 
            <li className="footerNavItem">
              <button className="footerNavButton" onClick={() => history.push(`/${navItem.name}`)}>
                {navItem.label}
              </button>
            </li>
          )}
        </ul>
      </nav>
        <div className="iconesRedesSociais">
          <a href="http://facebook.com"><img className="faceLogo" src={FacebookLogo} alt='Facebook' /></a>
          <a href="http://instagram.com"><img className="instaLogo" src={InstaLogo} alt='Instagram' /></a>
        </div>
      </div>
    </footer>

  );
}