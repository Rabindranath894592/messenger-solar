import React from 'react';
import './Breadcrumb.css';

export default function Breadcrumb(props) {
	return (
		<div className="Breadcrumb">
			<div className="container">
				<h3 className="BreadcrumbName">{props.name}</h3>
			</div>
		</div>
	);
}
