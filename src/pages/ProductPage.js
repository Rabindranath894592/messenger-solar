import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Customer from '../component/Customer';
import ProductCardMain from '../component/ProductCardMain';

export default function ProductPage() {
	return (
		<div>
			<Breadcrumb name="Our Products" />
			<ProductCardMain />
			<Customer />
		</div>
	);
}
