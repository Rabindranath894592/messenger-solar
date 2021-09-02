import React from 'react';
import ProductItem from './ProductItem';
import './Product.css';
import Heading from './Heading';

export default function Products() {
	return (
        <div className="Product">
            <div className="container">
                <Heading name="Our Products"/>
            </div>
            <div className="ProductPart">
                <ProductItem/>
            </div>
        </div>
	);
}
