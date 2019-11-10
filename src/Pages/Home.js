import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import HomeHistory from '../Components/HomeHistory';
import HomeCompany from '../Components/HomeCompany';
import HomeQuality from '../Components/HomeQuality';
import jumbotronHome from '../img/jumbotronHome.jpg';

export default function Home() {
    return (
        <>
            <Jumbotron 
                label="30 Anos de tradição, qualidade em perfis e artefatos de borracha"
                imgURL={jumbotronHome}
            />
            <div className="container">
                <HomeHistory />
                <HomeCompany />
                <HomeQuality />  
            </div>
        </>
    );
}
