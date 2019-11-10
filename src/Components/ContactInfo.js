import React from 'react';
import ContactCard from './ContactInfo copy';

function ContactInfo({ label }) {
  return (
    <div className="contactInfo">
      <ContactCard title="Telefone" items={["+55 11 4712 9104", "+55 11 4712 4597",]} />
      <ContactCard title="Endereço" items={["Rua Quintino Bocaiuva 1283", "São Roque - São Paulo - Brasil"]} />
      <ContactCard title="Email" items={["contato@rasil.com.br"]} />
    </div>
  );
}

export default ContactInfo;
