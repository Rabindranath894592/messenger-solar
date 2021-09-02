import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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

export default class ProductItem extends React.Component {
	constructor() {
		super();
		this.state = { value: 0 };
		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		this.setState({ value });
	}

	render() {
		return (
			<Carousel
				value={this.state.value}
				onChange={this.onChange}
				slidesPerPage={4}
				autoPlay={2000}
				animationSpeed={1000}
				infinite
				breakpoints={{
					640: {
						slidesPerPage: 1,
						arrows: true
					},
					900: {
						slidesPerPage: 2,
						arrows: true
					}
				}}
				slides={[
					<img src={Product1} alt="Product" />,
					<img src={Product2} alt="Product" />,
					<img src={Product3} alt="Product" />,
					<img src={Product4} alt="Product" />,
					<img src={Product5} alt="Product" />,
					<img src={Product6} alt="Product" />,
					<img src={Product7} alt="Product" />,
					<img src={Product8} alt="Product" />,
					<img src={Product9} alt="Product" />,
					<img src={Product10} alt="Product" />,
					<img src={Product11} alt="Product" />,
					<img src={Product12} alt="Product" />,
					<img src={Product13} alt="Product" />,
					<img src={Product14} alt="Product" />,
					<img src={Product15} alt="Product" />
				]}
				arrows
				clickToChange
			/>
		);
	}
}
