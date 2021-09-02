import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Customer from '../component/Customer';
import Service from '../component/Service';

export default function ServicePage() {
	return (
		<div>
			<Breadcrumb name="Our Services" />
			<Service />
			<Customer />
		</div>
	);
}
