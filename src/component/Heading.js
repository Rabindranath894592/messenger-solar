import React from 'react';
import './Heading.css';

export default function Heading(props) {
	return (
		<div className="Heading">
			<div className="HeadingItem">
				<h3 className="MainHeading">{props.name}</h3>
				<p className="SubHeading">
					Firstly, we’re an environmentally friendly renewable energy company offering a broad portfolio of<br />
					technologies, products, & solutions to our clients globally
				</p>
			</div>
		</div>
	);
}
