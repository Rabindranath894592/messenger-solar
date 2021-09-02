import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Testimonial from '../component/Testimonial';
import DownloadMain from '../component/DownloadMain';

export default function DownloadPage() {
	return (
		<div>
			<Breadcrumb name="Downloads" />
			<DownloadMain />
			<Testimonial />
		</div>
	);
}
