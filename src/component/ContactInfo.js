import React from 'react';
import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default function ContactInfo() {
	return (
		<div className="ContactInfo">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="ContactAddressSection">
							<h3 className="ContactAddressHeading">Registered Office</h3>
							<div className="ContactInfoWrap">
								<div className="row">
									<div className="col-md-2">
										<FontAwesomeIcon className="AddressIcon" icon={faMapMarkedAlt} />
									</div>
									<div className="col-md-10">
										<address className="ContactAddress">
											Narghat, Nandakumar, Haldia, Purba Medinipur<br />
											West Bengal, India
										</address>
									</div>
								</div>
								<div className="ContactItem">
									<div className="row">
										<div className="col-md-2">
											<FontAwesomeIcon className="AddressIcon" icon={faMobileAlt} />
										</div>
										<div className="col-md-10">
											<address className="ContactAddress">
												Mobile No - +91 9832 9104 31 / +91 6296 4303 81
											</address>
										</div>
									</div>
								</div>
								<div className="ContactItem">
									<div className="row">
										<div className="col-md-2">
											<FontAwesomeIcon className="AddressIcon" icon={faEnvelopeOpenText} />
										</div>
										<div className="col-md-10">
											<address className="ContactAddress">
												Email Id - support@messengersolar.com
											</address>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="ContactAddressSection">
							<h3 className="ContactAddressHeading">Corporate Office</h3>
							<div className="ContactInfoWrap">
								<div className="row">
									<div className="col-md-2">
										<FontAwesomeIcon className="AddressIcon" icon={faMapMarkedAlt} />
									</div>
									<div className="col-md-10">
										<address className="ContactAddress">
											Patharjuna More, Debogram, Kaliganj, Nadia<br />
											West Bengal, India, 741137
										</address>
									</div>
								</div>
								<div className="ContactItem">
									<div className="row">
										<div className="col-md-2">
											<FontAwesomeIcon className="AddressIcon" icon={faMobileAlt} />
										</div>
										<div className="col-md-10">
											<address className="ContactAddress">Mobile No - +91 6294 0685 93</address>
										</div>
									</div>
								</div>
								<div className="ContactItem">
									<div className="row">
										<div className="col-md-2">
											<FontAwesomeIcon className="AddressIcon" icon={faEnvelopeOpenText} />
										</div>
										<div className="col-md-10">
											<address className="ContactAddress">
												Email Id - support@messengersolar.com
											</address>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
