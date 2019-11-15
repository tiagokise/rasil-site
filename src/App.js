import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Representatives from './Pages/Representatives';
import Quality from './Pages/Quality';
import FooterPage from '../src/Components/FooterPage';
import NavRasil from './Components/NavRasil';




function App() {
  return (
    <>
      <header><NavRasil /></header>

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
