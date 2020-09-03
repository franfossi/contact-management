import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	console.log("page EditContact.js", store.contacts);

	const [newName, setName] = useState(store.contacts[props.match.params.edit].full_name);
	const [newEmail, setEmail] = useState(store.contacts[props.match.params.edit].email);
	const [newPhone, setPhone] = useState(store.contacts[props.match.params.edit].phone);
	const [newAddress, setAddress] = useState(store.contacts[props.match.params.edit].address);

	const [contactArray, setcontactArray] = useState();

	useEffect(() => {
		console.log("page EditContact.js", store.contacts);
		setcontactArray({
			agenda_slug: "franfossi",
			full_name: newName,
			email: newEmail,
			phone: newPhone,
			address: newAddress
		});
	}, [newName, newEmail, newPhone, newAddress]);

	return (
		<>
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Edit Contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								value={newName}
								onChange={event => setName(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								value={newEmail}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								value={newPhone}
								onChange={event => setPhone(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={newAddress}
								onChange={event => setAddress(event.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContact(contactArray, store.contacts[props.match.params.edit].id);
							}}>
							Save
						</button>
						<Link
							className="mt-3 w-100 text-center"
							to="/Contacts"
							onClick={() => {
								//state.actions.LoadContacts();
							}}>
							Back to contacts
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
