import React from 'react';
import './Service.css';
import ServiceFirst from '../assets/icon06.png';
import ServiceSecond from '../assets/icon05.png';
import ServiceThird from '../assets/icon04.png';
import ServiceForth from '../assets/icon03.png';
import ServiceFifth from '../assets/icon02.png';
import ServiceSixth from '../assets/icon01.png';

export default function Service() {
	return (
		<div className="Service">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="ServiceItem">
							<img className="ServiceImage" src={ServiceFirst} alt="Service First" />
							<h3 className="ServiceItemHeader">Industrial</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ServiceItem">
							<img className="ServiceImage" src={ServiceSecond} alt="Service First" />
							<h3 className="ServiceItemHeader">Solar As Service</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ServiceItemRight">
							<img className="ServiceImage" src={ServiceSixth} alt="Service First" />
							<h3 className="ServiceItemHeader">Solar PV System</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ServiceItemBottom">
							<img className="ServiceImage" src={ServiceFifth} alt="Service First" />
							<h3 className="ServiceItemHeader">Residential System</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ServiceItemBottom">
							<img className="ServiceImage" src={ServiceForth} alt="Service First" />
							<h3 className="ServiceItemHeader">Commercial System</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ServiceItemRightBottom">
							<img className="ServiceImage" src={ServiceThird} alt="Service First" />
							<h3 className="ServiceItemHeader">Government Service</h3>
							<p className="ServiceItemPara">
								With decades of practcal experience in making the alternative energy the matter of a
								reality, and with hundreds.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
