import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import ContactInfo from '../component/ContactInfo';
import ContactForm from '../component/ContactForm';

export default function ContactPage() {
	return (
		<div>
			<Breadcrumb name="Contact Us" />
			<ContactInfo />
			<ContactForm />
		</div>
	);
}
