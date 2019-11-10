import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import ContactInfo from '../Components/ContactInfo';
import ContactForm from '../Components/ContactForm';
import GoogleMapReact from 'google-map-react';
import jumbotronContact from '../img/jumbotronContact.jpeg';

function Contact() {
    return (
        <>
            <Jumbotron 
                label="Entre em contato agora mesmo"
                imgURL={jumbotronContact}
            />
        
            <div className="container">
                <ContactInfo />
                <ContactForm />
            </div>
            <GoogleMapReact
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={11}
            />
        </>
    );
}
export default Contact;