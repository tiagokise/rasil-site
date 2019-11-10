import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({products}) {

    return (
    <ul className="productsList">
        {products.map(product => <ProductCard {...product}/>)}
    </ul>
    );
}
