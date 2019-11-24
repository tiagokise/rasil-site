import React from 'react';

export default function ContactForm() {
  return (
    <form className="contactForm">
      <input id="name" name="name" placeholder="Nome" />
      <input id="email" name="email" placeholder="Email" />
      <textarea id="message" name="message" placeholder="Deixe uma mensagem..." />
      <button className="contactButton">Enviar</button>
    </form>
  );
}