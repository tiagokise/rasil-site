import React from 'react';
import QualityCard from '../Components/QualityCard';
import QualityPic01 from '../img/QualityPic01.jpg';
import QualityPic02 from '../img/QualityPic02.jpg';
import QualityPic03 from '../img/QualityPic03.jpg';
import QualityPic04 from '../img/QualityPic04.jpg';


export default function QualityCardList(Label) {
        const qualitycards = [
        {
                imgURL: QualityPic01,
                number: "01",
                title: "Borracha",
                text: "Contamos com vasta experiência no desenvolvimento de perfis de borracha para aplicações diversas." ,
        },                       
        {
                imgURL: QualityPic02,
                number: "02",
                title: "Guarnições",
                text: "Nossa fábrica está apta a produzir perfis, guarnições de vedação com emendas vulcanizadas e peças prensadas." ,
        },                              
        {
                imgURL: QualityPic03,
                number: "03",
                title: "Elastômeros",
                text: "Trabalhamos com diversos tipos de elastômeros, principalmente com EPDM, SBR, NBR e SILICONE. Estamos capacitados a desenvolver projetos." ,
        }, 
        {
                imgURL: QualityPic04,
                number: "04",
                title: "Moldes",
                text: "Nossos clientes são atendidos com agilidade uma vez que contamos com matrizaria própria além de parcerias no desenvolvimentos de moldes para prensados." ,
        }, 

        ]
        return (
                <div className="qualityCardList">
                        {  qualitycards.map(qualitycard => <QualityCard  { ...qualitycard} />) }

                </div>
        );
}