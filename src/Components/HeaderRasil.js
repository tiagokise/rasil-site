import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LogoRasil from './LogoRasil';


export default function HeaderRasil() {
  const history = useHistory()
  const [headerNavIsOpen, setHeaderNavIsOpen] = useState(true);
  const navItems = [
    { name: "home", label: "Home" },
    { name: "qualidade", label: "Qualidade" },
    { name: "produtos", label: "Produtos" },
    { name: "representantes", label: "Representantes" },
    { name: "contato", label: "Contato" },
  ]

  return (
    <header className="headerRasil" >
      <div className="logoRasilHeader">
        <LogoRasil />
      </div>
      <nav className={`headerNav ${headerNavIsOpen ? "headerNavIsOpen" : ""}`}>
        <ul className="headerNavList">
          {navItems.map(navItem =>
            <li className="headerNavItem">
              <button className="headerButton" onClick={() => { setHeaderNavIsOpen(true); history.push(`/${navItem.name}`) }}>
                {navItem.label}
              </button>
            </li>
          )}
        </ul>
      </nav>
      <button className={`hamburgerBox ${headerNavIsOpen ? "isOpen" : ""}`} onClick={() => setHeaderNavIsOpen(!headerNavIsOpen)}>
        <div className="hamburger"></div>
      </button>
    </header>
  );
}
