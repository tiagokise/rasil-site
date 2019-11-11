import React from 'react';
import QualityCard from '../Components/QualityCard';
import QualityPic01 from '../img/QualityPic01.jpg';
import QualityPic02 from '../img/QualityPic02.jpg';
import QualityPic03 from '../img/QualityPic03.jpg';
import QualityPic04 from '../img/QualityPic04.jpg';


export default function QualityCardList(Label) {

        
        return (
                <>
                        <div className="qualityCardList">
                                <QualityCard
                                        imgURL={QualityPic01}
                                        numbers={["01"]}
                                        title="Borracha"
                                        items={["Contamos com vasta experiência no desenvolvimento de perfis de borracha para aplicações diversas. "]} />
                                <div className="qualitypageDiv"></div>
                                <QualityCard
                                        imgURL={QualityPic02}
                                        numbers={["02"]}
                                        title="Guarnições"
                                        items={["Nossa fábrica está apta a produzir perfis, guarnições de vedação com emendas vulcanizadas e peças prensadas."]} />
                                <div className="qualitypageDiv"></div>
                                <QualityCard
                                        imgURL={QualityPic03}
                                        numbers={["03"]}
                                        title="Elastômeros"
                                        items={["Trabalhamos com diversos tipos de elastômeros, principalmente com EPDM, SBR, NBR e SILICONE. Estamos capacitados a desenvolver projetos"]} />
                                <div className="qualitypageDiv"></div>
                                <QualityCard
                                        imgURL={QualityPic04}
                                        numbers={["04"]}
                                        title="Moldes"
                                        items={["Nossos clientes são atendidos com agilidade uma vez que contamos com matrizaria própria além de parcerias no desenvolvimentos de moldes para prensados."]} />
                                <div className="qualitypageDiv"></div>




                        </div>

                </>
        );
}