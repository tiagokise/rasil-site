import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function HeaderRasil() {
  const history = useHistory()
  const [ headerNavIsOpen, setHeaderNavIsOpen ] = useState(false);
  const navItems = [
    {name: "home", label: "Home"},
    {name: "qualidade", label: "Qualidade"},
    {name: "produtos", label: "Produtos"},
    {name: "representantes", label: "Representantes"},
    {name: "contato", label: "Contato"},
  ]

  return (
    <header className="headerRasil" >
      <button className="logoButton" onClick={() => history.push("/")}>
        <h1 className="h1LogoRasil"><strong className="strongLogoRasil">Rasil</strong> Borrachas</h1>
      </button>
      <nav className={`headerNav ${headerNavIsOpen ? "headerNavIsOpen" : ""}`}>
        <ul className="headerNavList">
          { navItems.map(navItem => 
            <li className="headerNavItem">
              <button className="button" onClick={() => history.push(`/${navItem.name}`)}>{navItem.label}</button>
            </li>
          )}
        </ul>
      </nav>
      <button className={`hamburgerBox ${headerNavIsOpen ? "isOpen" : ""}`} onClick={() => setHeaderNavIsOpen(!headerNavIsOpen) }>
        <div className="hamburger"></div>
      </button>
    </header>
  );  
}
