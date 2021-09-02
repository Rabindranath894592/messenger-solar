import React from 'react';
import { Link } from 'react-router-dom';
import PDF from '../assets/pdf-icon.png';

import './DownloadMain.css';

export default function DownloadMain() {
	return (
		<div className="DownloadMain">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="card text-center">
							<img src={PDF} className="DownloadImage card-img-top" alt="Pdf Icon" />
							<div className="card-body">
								<h5 className="card-title">Dealership Application Form</h5>
								<Link
									className="DownloadLinkOption"
									to={process.env.PUBLIC_URL + '/pdf-file/delearship-application-form.pdf'}
									target="_blank"
									download
								>
									Download
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card text-center">
							<img src={PDF} className="DownloadImage card-img-top" alt="Pdf Icon" />
							<div className="card-body">
								<h5 className="card-title">Messenger Solar</h5>
								<Link
									className="DownloadLinkOption"
									to={process.env.PUBLIC_URL + '/pdf-file/Messenger-Solar.pdf'}
									target="_blank"
									download
								>
									Download
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card text-center">
							<img src={PDF} className="DownloadImage card-img-top" alt="Pdf Icon" />
							<div className="card-body">
								<h5 className="card-title">Rose Solar</h5>
								<Link
									className="DownloadLinkOption"
									to={process.env.PUBLIC_URL + '/pdf-file/Rose-Solar.pdf'}
									target="_blank"
									download
								>
									Download
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
