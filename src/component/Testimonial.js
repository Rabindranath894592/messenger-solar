import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Testimonial.css';
import TestimonialItem from './TestimonialItem';
import Avataar from '../assets/avataar.jpg';

export default class Testimonial extends React.Component {
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
			<div className="Testimonial">
				<div className="container">
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexFlow: 'row',
							alignContent: 'center',
							textAlign: 'center'
						}}
					/>
					<Carousel
						value={this.state.value}
						onChange={this.onChange}
						slidesPerPage={1}
						autoPlay={5000}
						animationSpeed={1000}
						dots
						infinite
						slides={[
							<TestimonialItem
								name="Narendra Modi"
								image={Avataar}
								details="We want to bring solar energy into our lives and homes, by making it cheaper, more reliable
							and easier to connect to grid. India’ global electricity grid plan— ‘One Sun One World One
							Grid’."
								designation="Prime Minister, India"
							/>,
							<TestimonialItem
								name="Narendra Modi"
								image={Avataar}
								details="We want to bring solar energy into our lives and homes, by making it cheaper, more reliable
							and easier to connect to grid. India’ global electricity grid plan— ‘One Sun One World One
							Grid’."
								designation="Prime Minister, India"
							/>
						]}
					/>
				</div>
			</div>
		);
	}
}
