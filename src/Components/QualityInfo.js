import React from 'react';
import QualityCard from './QualityCard';
import IsoPic from '../img/iso9001.jpg';


function QualityInfo ({ label }) {
  return (
    <div className="qualityInfo">
      
      <QualityCard 
      title="Matéria-Prima" 
      items={["Dispomos de laboratório próprio e uma equipe de profissionais qualificados, combinados com a utilização das melhores matérias-primas e de modernos equipamentos, assegurando qualidade e confiabilidade aos nossos produtos. Efetuamos um rigoroso controle de qualidade desde o recebimento das matérias-primas até a entrega do produto final, monitorando todas as etapas do processo produtivo e garantido a rastreabilidade em nossos produtos."]} />
      
      <QualityCard 
      title="Qualidade" 
      items={["Todos os itens da Rasil recebem fichas técnicas de produção e inspeção de qualidade, garantindo o padrão de qualidade exigido por nossos parceiros. Alinhados com as atuais exigências ambientais, a Rasil Borrachas busca a excelência de seus produtos e processos, respeitando o meio-ambiente, buscando sempre inovações tecnológicas que possam reduzir o impacto ambiental de nossas atividades."]} />
      
      <div className="IsoDiv">
        <img className="Iso9001" src={IsoPic} alt='ISO 9001' />
        <div className="textoIsodiv">
           <span className="textoseloiso">Clique aqui para visualizar nosso certificado</span>
        </div>
      </div>

      <QualityCard 
      title="Política de Qualidade" 
      items={["Temos o compromisso com a excelência no desenvolvimento, fabricação e comercialização de artefatos de borracha e fortalecimento de seu Sistema de Gestão da Qualidade. Assegurar o compromisso com a satisfação dos clientes no fornecimento de produtos e serviços. Fortalecer a aproximação entre as partes interessadas para o fornecimento de soluções ao mercado. Gestão competente dos recursos, colaboradores e processos com análise e ações para abordagem preventiva para eliminação de riscos com foco na melhoria contínua."]} />
   
    </div>
  );
}

export default QualityInfo;
