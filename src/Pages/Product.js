import React from 'react'
import Jumbotron from '../Components/Jumbotron';
import jumbotronProduct from '../img/jumbotronProduto.jpg';
import ProductList from '../Components/ProductList';
import ProductsHeader from '../Components/ProductsHeader';
import productItem1 from '../img/productItem1.png';

export default function Product() {
    const products=[
        {
            imgURL: productItem1,
            name: "Trafilado vedação",
            code: "R-3644",
        },
        {
            imgURL: productItem1,
            name: "Trafilado vedação 2",
            code: "R-3645",
        },
        {
            imgURL: productItem1,
            name: "Trafilado vedação 3",
            code: "R-3646",

        }
    ]

    return (
        <>
            <Jumbotron 
                label="Produtos do melhor material"
                imgURL={jumbotronProduct}
            />
            <div className="container">
                <ProductsHeader />
                <ProductList products={products} />
            </div>  
        </>
    );
}