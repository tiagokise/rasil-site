import React from 'react';
import historyImage from '../img/historyImage.jpg';


export default function HomeHistory() {
  return (
        <div className="homeHistory">
          <div className="historyInfo">
          <h3 className="homeTitle">30 anos de tradição</h3>
          <p className="homeText">Atuando há mais de 30 anos no mercado de artefatos de borracha, a Rasil Borrachas obteve mais um conquista. Em março de 2009 teve seu Sistema de Gestão e Qualidade certificado de acordo com a Norma ISO 9001.</p> 
          <p className="homeText">Este fato ratifica o comprometimento em busca de soluções que atendam às necessidades de nossos clientes, objetivando resultados positivos aos seus negócios.</p> 
          <p className="homeText">Nossa política de trabalho visa sempre proporcionar segurança e tranqüilidade aos nossos parceiros no tocante aos produtos fornecidos pela nossa empresa, gerando assim satisfação mútua.</p>
          <p className="homeText">Prezamos pela honestidade e responsabilidade nas relações com nossos colaboradores, clientes e fornecedores, respeitando a ética no desenvolvimento dos negócios e no cumprimento das exigências econômicas e sociais.</p>
          </div>
          <div className="historyImageBox">
          <img className="historyImage" src={historyImage} alt="Imagem histórica da Rasil"/>
          </div>
        </div>
  );
}