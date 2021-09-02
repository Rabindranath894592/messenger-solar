import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
	return (
		<div className="Footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="FooterCopyRight">
							<p className="FooterCopyRightContent">Copyright © 2020 MESSENGAR SOLAR</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="FooterSocial">
							<div className="FooterSocialItem">
								<a
									className="SocialLink"
									href="https://www.facebook.com/108048147408510/posts/178033927076598/?sfnsn=wiwspmo&extid=lABezyZ7yuYSu5mf"
								>
									<FontAwesomeIcon className="SocialIcon" icon={faFacebook} />
								</a>
								<Link className="SocialLink">
									<FontAwesomeIcon className="SocialIcon" icon={faYoutube} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
