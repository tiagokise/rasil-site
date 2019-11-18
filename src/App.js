import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Representatives from './Pages/Representatives';
import Quality from './Pages/Quality';
import FooterPage from '../src/Components/FooterPage';

function App() {
  return (
    <>
      <header>
        <div className="headerRasil">

            <a className="logoRasil">Rasil</a>
            <a className="logoBorrachas">Borrachas</a>
          <span className="navBarMenu">
            <div className="navBarLine"></div>
            <div className="navBarLine"></div>
            <div className="navBarLine"></div>
          </span>
        </div>

      </header>

        <Switch>
         <Route path="/contato" component={Contact} />
         <Route path="/home" component={Home} />
         <Route path="/produtos" component={Product} />
         <Route path="/representantes" component={Representatives} />
         <Route path="/qualidade" component={Quality} />
        </Switch>
        <footer>
        <FooterPage />
        </footer>
      
    </>
  );
}

export default App;
