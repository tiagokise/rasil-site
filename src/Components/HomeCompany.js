import React from 'react';
import CompanyImage1 from '../img/CompanyImage1.jpg';
import CompanyImage2 from '../img/CompanyImage2.jpg';

export default function HomeCompany() {
  return (
    <>
    <div className="homeCompany">
      <div className="companyInfo">
        <h3 className="homeTitle">A Empresa</h3>
        <p className="homeText">A Rasil Borrachas foi fundada em 1978 na cidade de São Roque, é resultado do espírito empreendedor do Sr. Jacy Alves da Silva, que acreditou na fabricação de artefatos de borracha visando o mercado de reposição da linha automobilista.</p> 
        <p className="homeText">Sediada à margem da Rodovia Raposo Tavares, a 50 km da capital de São Paulo, a Rasil Borrachas conta atualmente com 3300 m² de área construída após várias expansões durante sua historia.</p> 
        <p className="homeText">Qualidade e flexibilidade sempre foram os pontos fortes da Rasil, além do constante aprimoramento dos processos e produtos, oferecendo atualmente perfis de qualidade a preços competitivos, reconhecidos pelo mercado. </p>
        <p className="homeText">Nos últimos anos a empresa teve um crescimento acentuado, abrindo novos campos de atuação, desenvolvendo novos itens e atendendo a novos mercados.  </p>
      </div>
      <div className="companyImagebox companyImagebox1">
        <img className="companyImage1" src={CompanyImage1} alt='Solda' />
      </div>
        <div className="companyImagebox companyImagebox2">
        <img className="companyImage2" src={CompanyImage2} alt='Rolo' />
      </div>
    </div>
    </>
  );
}