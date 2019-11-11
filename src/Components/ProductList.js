import React from 'react'
import ProductLineCard from './ProductLineCard';

export default function ProductList({products}) {

    return (
    <ul className="productsList">
        {products.map(product => <ProductLineCard {...product}/>)}
    </ul>
    );
}
