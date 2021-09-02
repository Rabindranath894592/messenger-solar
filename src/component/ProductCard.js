import React from 'react';
import './ProductCard.css';

export default function ProductCard(props) {
	return (
		<div className="ProductCard text-center">
			<div class="card">
				<img src={props.image} class="card-img-top" alt={props.alt} />
				<div class="card-body">
					<h5 class="card-title">{props.name}</h5>
				</div>
			</div>
		</div>
	);
}
