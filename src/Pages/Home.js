import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import HeaderLogo from '../Components/HeaderLogo';
import YearsInfo from '../Components/YearsInfo';
import BusiInfo from '../Components/BusiInfo';
import QualityData from '../Components/QualityData';
import QualityInfo from '../Components/QualityInfo';
import TwoPics from '../Components/TwoPics';
import jumbotronHome from '../img/jumbotronHome.jpg';




function Home() {
    return (
        <>
            <HeaderLogo />
            <Jumbotron 
                label="30 Anos de tradição, qualidade em perfis e artefatos de borracha"
                imgURL={jumbotronHome}
            />
            <div className="container">

            <YearsInfo />
            <BusiInfo />
            <TwoPics />  
            <QualityData />  
            <QualityInfo />
            </div>
        </>

    );
}


export default Home;