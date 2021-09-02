import React from 'react';
import './Customer.css';

export default function Customer() {
	return (
		<div className="Customer">
			<div className="container">
				<div className="CustomerItem text-center">
					<p className="CustomerHeading">Create Your own Product Order List</p>
					<p className="CustomerPara">
						Firstly, we’re an environmentally friendly renewable energy company offering a broad portfolio
						of<br />
						technologies, products, & solutions to our clients globally
					</p>
					<button type="button" class="btn btn-primary CustomerButton">
						MY ACCOUNT
					</button>
				</div>
			</div>
		</div>
	);
}
