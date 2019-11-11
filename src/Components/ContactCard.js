import React from 'react';

export default function ContactCard({ title, items }) {
  return (
    <div className="contactCard">
      <h2>{title}</h2>
      {items.map(item => <p>{item}</p> )}
    </div>
  );
}