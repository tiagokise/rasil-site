import React from 'react';

function ContactForm() {
  return (
    <form className="contactForm">
      <input id="name" name="name" placeholder="Nome" />
      <input id="email" name="email" placeholder="Email" />
      <textarea id="message" name="message" placeholder="Deixe uma mensagem..." />
      <button>Enviar</button>
    </form>
  );
}

export default ContactForm;
