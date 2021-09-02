import React from 'react';
import AboutFull from '../assets/home02.png';
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<div className="About">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img className="AboutImage" src={AboutFull} alt="About" />
					</div>
					<div className="col-md-6">
						<div className="AboutItem">
							<p className="AboutSubHeading">Know Who We Are</p>
							<h3 className="AboutHeading">About Our Company</h3>
							<p className="AboutPara">
								Meesenger Solar is a kolkata based company started their journey in the year 2018.
								Although, in the budding stage, the company has proved its credentials by offering
								innovative Solar Products that deliver high performace at low costs. Our products are
								there to stay and provide the best alternative to conventional energy sources.
							</p>
							<button type="button" class="btn btn-primary BannerButton">
								<Link className="ButtonLink" to="/contact">
									CONTACT US
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
