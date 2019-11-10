import React from 'react';

function ContactCard({ title, items }) {
  return (
    <div className="contactCard">
      <h2>{title}</h2>
      {items.map(item => <p>{item}</p> )}
    </div>
  );
}

export default ContactCard;
