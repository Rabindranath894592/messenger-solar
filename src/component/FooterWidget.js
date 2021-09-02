import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './FooterWidget.css';

export default function FooterWidget() {
	return (
		<div className="FooterWidget">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="FooterItem">
							<div className="FooterImage">
								<img className="FooterLogo" src={Logo} alt="Mesenger Solar" />
							</div>
							<p className="FooterPara">
								Meesenger Solar is a kolkata based company started their journey in the year 2018.
								Although, in the budding stage, the company has proved its credentials by offering
								innovative Solar Products that deliver high performace at low costs.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="FooterItem">
							<h3 className="FooterHeading">Useful Links</h3>
							<ul className="FooterList">
								<li>
									<Link class="FooterListItem" aria-current="page" to="/">
										Home
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/about">
										About Us
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Services
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/product">
										Products
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/download">
										Download
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/contact">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-4">
						<div className="FooterItem">
							<h3 className="FooterHeading">Our Services</h3>
							<ul className="FooterList">
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Industrial
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Solar As Service
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Solar PV System
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Residential System
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Commercial System
									</Link>
								</li>
								<li>
									<Link class="FooterListItem" aria-current="page" to="/service">
										Government Service
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
