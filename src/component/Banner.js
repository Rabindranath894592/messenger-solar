import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

export default function Banner() {
	return (
		<div className="Banner">
			<div className="BannerItem text-center">
				<span className="BannerSubHeading">Welcome to Messenger Solar</span>
				<p className="BannerHeading">RE-SHAPING THE SOLAR REVOLUTION</p>
				<p className="BannerPara">
					MESSENGER SOLAR <span className="BannerTagLine">A Unit of Rose Solar</span> is based in Haldia,
					Purba Medinipur, West Bengal, established in October, 2018. We've consistently grown since then, all
					thanks to the helping hands of this amazing community!
				</p>
				<button type="button" class="btn btn-primary BannerButton">
					<Link className="ButtonLink" to="/about">
						LEARN MORE
					</Link>
				</button>
			</div>
		</div>
	);
}
