import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Representatives from './Pages/Representatives';
import Quality from './Pages/Quality';
import FooterRasil from './Components/FooterRasil';
import HeaderRasil from './Components/HeaderRasil';

function App() {
  return (
    <>
      <HeaderRasil />
      <Switch>
        <Route path="/contato" component={Contact} />
        <Route path="/produtos" component={Product} />
        <Route path="/representantes" component={Representatives} />
        <Route path="/qualidade" component={Quality} />
        <Route path="/" component={Home} />
      </Switch>
      <FooterRasil />
      
    </>
  );
}

export default App;
