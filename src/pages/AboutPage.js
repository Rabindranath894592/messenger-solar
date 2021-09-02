import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import About from '../component/About';
import Testimonial from '../component/Testimonial';
import LegalDocument from '../component/LegalDocument';

export default function AboutPage() {
	return (
		<div>
			<Breadcrumb name="About Us" />
			<About />
			<LegalDocument />
			<Testimonial />
		</div>
	);
}
