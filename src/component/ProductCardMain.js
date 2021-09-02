import React from 'react';
import ProductCard from './ProductCard';
import Product1 from '../assets/solar-signal-light.jpg';
import Product2 from '../assets/solar-panel.jpg';
import Product3 from '../assets/solar-home-light.jpg';
import Product4 from '../assets/Solar-helmet.jpg';
import Product5 from '../assets/Solar-cap.jpg';
import Product6 from '../assets/solar-e-rickshaw.jpg';
import Product7 from '../assets/solar-auto.jpg';
import Product8 from '../assets/solar-air-purifier.jpg';
import Product9 from '../assets/solar-fm-radio.jpg';
import Product10 from '../assets/solar-multi-charger.jpg';
import Product11 from '../assets/solar-power-bank.jpg';
import Product12 from '../assets/solar-water-purifier.jpg';
import Product13 from '../assets/solar-submersible.jpg';
import Product14 from '../assets/solar-salu.jpg';
import Product15 from '../assets/solar-pump.jpg';
import './ProductCardMain.css';

export default function ProductCardMain() {
	return (
		<div className="ProductCardMain">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<ProductCard name="Solar Street Light" image={Product1} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Advertising Light" image={Product2} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Home Light" image={Product3} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Helmet" image={Product4} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Cap" image={Product5} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar E Rickshaw" image={Product6} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Auto" image={Product7} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Air Purifier" image={Product8} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Fm Radio" image={Product9} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Multi Charger" image={Product10} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Power Bank" image={Product11} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Water Purifier" image={Product12} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Submersible" image={Product13} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Salu" image={Product14} alt="Product" />
					</div>
					<div className="col-md-3">
						<ProductCard name="Solar Petrol Pump" image={Product15} alt="Product" />
					</div>
				</div>
			</div>
		</div>
	);
}
