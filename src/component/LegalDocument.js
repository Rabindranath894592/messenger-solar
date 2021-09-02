import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';
import Enrolment from '../assets/enrolment-certificate.jpg';
import GSTRegistration from '../assets/registration-certificate-updated.jpeg';
import './LegalDocument.css';

export default function LegalDocument() {
	return (
		<div className="LegalDocument">
			<div className="container">
				<Heading name="Our Legal Document" />
				<div className="row">
					<div className="col-md-2" />
					<div className="col-md-4">
						<Link to={Enrolment} target="_blank">
							<img className="LegalDocumentPaper" src={Enrolment} alt="Enrolment Certificate" />
						</Link>
						<p className="LegalDocumentPaperDescription text-center">Enrolment Certificate</p>
					</div>
					<div className="col-md-4">
						<Link to={GSTRegistration} target="_blank">
							<img
								className="LegalDocumentPaper"
								src={GSTRegistration}
								alt="GST Registration Certificate"
							/>
						</Link>
						<p className="LegalDocumentPaperDescription text-center">GST Registration Certificate</p>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		</div>
	);
}
