import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';

export default function Header() {
	return (
		<React.Fragment>
			<nav class="navbar navbar-expand-lg navbar-light bg-white">
				<div class="container">
					<Link class="navbar-brand" to="/">
						<img className="NavbarImage" src={Logo} alt="Messenger Solar Logo" />
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<Link class="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/about">
									About Us
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/service">
									Services
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/product">
									Products
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/download">
									Download
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}
