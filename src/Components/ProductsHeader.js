import React from 'react'

export default function ProductsHeader() {
    const categories = ["Solidos", "Prensados", "Vedações", "Esponjosos"]
    return (
        <div className="productsHeader">
            <h3 className="productsText">
                Os melhores produtos para atenderem as suas diversas necessidades.
            </h3>
            <ul className="productsCategories">
                {categories.map(category => 
                    <li className="productsCategory">{category}
                    </li>)}
            </ul>
        </div>
    );
}