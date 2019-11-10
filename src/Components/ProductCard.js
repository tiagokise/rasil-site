import React from 'react';

export default function ProductLineCard({ imgURL, name, code }) {
  return (
    <li className="productCard">
      <img className="productImage" src={imgURL} alt={name}/>
      <h4 className="productName">{name}</h4>
      <p className="productCode">{code}</p>
    </li>
  );
}