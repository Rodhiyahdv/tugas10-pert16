import React from "react";
import { useState } from "react";
import '../App.css';

import ballpoint from './pic/ballpoint.jpg';
import f470 from './pic/f470.jpg';
import mapkancing from './pic/mapkancing.jpg';
import spidol from './pic/spidol.jpg';

const ListProduct = () => {
    const [product] = useState ([
        {
            categoryProduct: 'Alat Tulis', 
            nameProduct: 'Ballpoint Standard AE-7',
            priceProduct: 'Rp 2.000,-',
            picProduct: ballpoint
        },
        {
            categoryProduct: 'Alat Tulis', 
            nameProduct: 'Spidol Snowman Whiteboard Marker',
            priceProduct: 'Rp 7.000,-',
            picProduct: spidol
        },
        {
            categoryProduct: 'Kertas',
            nameProduct: 'Kertas F4 70 Gram Sidu',
            priceProduct: 'Rp 36.000,-',
            picProduct: f470
        },
        {
            categoryProduct: 'Map',
            nameProduct: 'Map Plastik Kancing',
            priceProduct: 'Rp 3.500,-',
            picProduct: mapkancing
        }
    ])
    
    return (
        <>
        <div id="ItemProduct">
            <h3>Jawaban no.2 (List Product dan Product Item)</h3> 
        </div>
               
        <div id="ItemProduct">
            {product.map(product => (
                <div key={product.categoryProduct} className="Items">
                    <img src={product.picProduct} width="150px" alt="product"/>
                    <p style={{fontWeight:'bold'}}>Kategori : {product.categoryProduct}</p>
                    <p>{product.nameProduct}</p>
                    <p>{product.priceProduct}</p>
                </div>                
            ))}    
        </div>
        </>
    )
}

export default ListProduct;