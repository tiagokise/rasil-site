import React from 'react';
import IsoPic from '../img/iso9001.jpg';
import QualityCard from './QualityCard';

export default function HomeQuality() {

  const qualitycards = [
    {
      title: "Matéria-Prima",
      texts: [
        "Dispomos de laboratório próprio e uma equipe de profissionais qualificados, combinados com a utilização das melhores matérias-primas e de modernos equipamentos, assegurando qualidade e confiabilidade aos nossos produtos.",
        "Efetuamos um rigoroso controle de qualidade desde o recebimento das matérias-primas até a entrega do produto final, monitorando todas as etapas do processo produtivo e garantido a rastreabilidade em nossos produtos."
      ]
    },
    {
      title: "Qualidade",
      texts: [
        "Todos os itens da Rasil recebem fichas técnicas de produção e inspeção de qualidade, garantindo o padrão de qualidade exigido por nossos parceiros.",
        "Alinhados com as atuais exigências ambientais, a Rasil Borrachas busca a excelência de seus produtos e processos, respeitando o meio-ambiente, buscando sempre inovações tecnológicas que possam reduzir o impacto ambiental de nossas atividades."
      ],
      certifieds: [
        {
          title: "ISO 9001",
          imgURL: IsoPic,
          label: "Clique aqui para vizualizar nosso certificado",
          link: ""
        }
      ]

    },
    {
      title: "Política de Qualidade",
      texts: [
        "Temos o compromisso com a excelência no desenvolvimento, fabricação e comercialização de artefatos de borracha e fortalecimento de seu Sistema de Gestão da Qualidade.",
        "Assegurar o compromisso com a satisfação dos clientes no fornecimento de produtos e serviços.",
        "Fortalecer a aproximação entre as partes interessadas para o fornecimento de soluções ao mercado.",
        "Gestão competente dos recursos, colaboradores e processos com análise e ações para abordagem preventiva para eliminação de riscos com foco na melhoria contínua.",
      ]
    },
  ]

  return (
    <div className="homeQuality">
      <h3 className="homeTitle">Qualidade</h3>
      <p className="homeText">Comprometidos com o atendimento das exigências de nossos clientes, melhoria continua de nossos processos e produtos, aperfeiçoamento do nosso quadro de colaboradores, a RASIL BORRACHAS vem aprimorando seu Sistema de Gestão da Qualidade de acordo com a norma ISO 9001, com certificação obtida em março/2009.</p>
      <div className="qualityInfos">
        {  qualitycards.map(qualitycard => <QualityCard  { ...qualitycard} />) }
      </div>
    </div>
  );
}


