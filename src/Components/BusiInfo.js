import React from 'react';
import Image1 from '../img/468447032.jpg';


function BusiInfo() {
  return (
    <>
    <div className="busiPic">
      <img src={Image1} alt='A Empresa' />
    </div>
    <div className="tradition">
       <span className="BusiName">A Empresa</span><br/><br/>
       <span className="datainfo">A Rasil Borrachas foi fundada em 1978 na cidade de São Roque, é resultado do espírito empreendedor do Sr. Jacy Alves da Silva, que acreditou na fabricação de artefatos de borracha visando o mercado de reposição da linha automobilista. 
       <br/><br/>
        Sediada à margem da Rodovia Raposo Tavares, a 50 km da capital de São Paulo, a Rasil Borrachas conta atualmente com 3300 m² de área construída após várias expansões durante sua historia. 
        Qualidade e flexibilidade sempre foram os pontos fortes da Rasil, além do constante aprimoramento dos processos e produtos, oferecendo atualmente perfis de qualidade a preços competitivos, reconhecidos pelo mercado. 
        <br/><br />
        Nos últimos anos a empresa teve um crescimento acentuado, abrindo novos campos de atuação, desenvolvendo novos itens e atendendo a novos mercados. 
        </span>
    </div>
    </>
  );
}

export default BusiInfo;
