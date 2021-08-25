import React from "react";
import { useState } from "react";

const ListProduct = () => {
    const [product] = useState ([
        {
            categoryProduct: 'Alat Tulis', 
            nameProduct: 'Ballpoint Standard AE-7',
            priceProduct: 'Rp 2.000,-'
        },
        {
            categoryProduct: 'Kertas',
            nameProduct: 'Kertas F4 70 Gram Sidu',
            priceProduct: 'Rp 36.000,-'
        },
        {
            categoryProduct: 'Map',
            nameProduct: 'Map Plastik Kancing',
            priceProduct: 'Rp 3.500,-'
        }
    ])
    
    return (
        <div>
            <h3>Jawaban no.2 (List Product dan Product Item)</h3>
            {product.map(product => (
                <div key={product.categoryProduct}>
                    <p style={{fontWeight:'bold'}}>{product.categoryProduct}</p>
                    <p>{product.nameProduct}</p>
                    <p>{product.priceProduct}</p>
                </div>                
            ))}    
        </div>
    )
}

export default ListProduct;