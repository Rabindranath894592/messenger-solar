import React from 'react';
import Banner from '../component/Banner';
import About from '../component/About';
import Customer from '../component/Customer';
import Service from '../component/Service';
import Heading from '../component/Heading';
import Testimonial from '../component/Testimonial';
import Product from '../component/Product';

export default function HomePage() {
	return (
		<div>
			
			<Banner />
			<About />
			<Customer />
			<Heading name="Our Services" />
			<Service />
			<Product />
			<Testimonial />
			
		</div>
	);
}
