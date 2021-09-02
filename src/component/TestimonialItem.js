import React from 'react';
import './TestimonialItem.css';

export default function TestimonialItem(props) {
	return (
		<div className="TestimonialItem">
			<div className="container">
				<div className="TestimonialPart">
					<div className="TestimonialAvataar">
						<img className="Avataar" src={props.image} alt="Testimonial Client" />
					</div>
					<div className="TestimonialPartDetails">
						<p className="TestimonialPara">{props.details}</p>
					</div>
					<div className="TestimonialClient">
						<p className="TestimonialClientName">{props.name}</p>
					</div>
					<div className="TestimonialClient">
						<p className="TestimonialClientDesignation">{props.designation}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
