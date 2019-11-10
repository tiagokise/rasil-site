import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Representative from './Pages/Representative';
import QualityPage from './Pages/QualityPage';
import FooterPage from '../src/Components/FooterPage';




function App() {
  return (
    <>
      <header>HEADER</header>

        <Switch>
         <Route path="/contato" component={Contact} />
         <Route path="/home" component={Home} />
         <Route path="/produtos" component={Product} />
         <Route path="/representantes" component={Representative} />
         <Route path="/qualidade" component={QualityPage} />
        </Switch>
        <footer>
        <FooterPage />
        </footer>
      
    </>
  );
}

export default App;
