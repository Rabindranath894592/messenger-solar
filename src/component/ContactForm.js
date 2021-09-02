import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
	return (
		<div className="ContactForm">
			<div className="container">
				<div className="row">
					<div className="col-md-2" />
					<div className="col-md-8">
						<div className="ContactFormMain">
							<div className="ContactHeading">
								<h2 className="ContactFormHeading">We Love to Hear From You</h2>
								<p className="ContactFormSubHeading">
									Please fill the contact form below and send us! We will be happy to assist you
								</p>
							</div>
							<div className="ContactMainForm">
								<form class="row g-3">
									<div class="row g-3">
										<div class="col-md-6">
											<label for="firstName" class="form-label">
												First Name
											</label>
											<input type="text" class="form-control" aria-label="First name" />
										</div>
										<div class="col-md-6">
											<label for="lastName" class="form-label">
												Last Name
											</label>
											<input type="text" class="form-control" aria-label="Last name" />
										</div>
									</div>
									<div class="col-md-6">
										<label for="inputEmail4" class="form-label">
											Email
										</label>
										<input type="email" class="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label for="inputPhoneNumber" class="form-label">
											Phone
										</label>
										<input type="number" class="form-control" id="inputPhoneNumber" />
									</div>
									<div class="col-12">
										<label for="inputAddress" class="form-label">
											Address
										</label>
										<input
											type="text"
											class="form-control"
											id="inputAddress"
											placeholder="1234 Main St"
										/>
									</div>
									<div class="col-12">
										<label for="inputAddress2" class="form-label">
											Address 2
										</label>
										<input
											type="text"
											class="form-control"
											id="inputAddress2"
											placeholder="Apartment, studio, or floor"
										/>
									</div>
									<div class="col-md-6">
										<label for="inputCity" class="form-label">
											City
										</label>
										<input type="text" class="form-control" id="inputCity" />
									</div>
									<div class="col-md-4">
										<label for="inputState" class="form-label">
											State
										</label>
										<select id="inputState" class="form-select">
											<option selected>Choose...</option>
											<option>West Bengal</option>
										</select>
									</div>
									<div class="col-md-2">
										<label for="inputZip" class="form-label">
											Zip
										</label>
										<input type="text" class="form-control" id="inputZip" />
									</div>
									<div class="col-12">
										<div class="form-check" />
									</div>
									<div class="col-12">
										<button type="submit" class="btn btn-success">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		</div>
	);
}
