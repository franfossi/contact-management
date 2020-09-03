import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const [newName, setnewName] = useState();
	const [newEmail, setnewEmail] = useState();
	const [newPhone, setnewPhone] = useState();
	const [newAddress, setnewAddres] = useState();

	const [contactArray, setcontactArray] = useState();
	const { actions } = useContext(Context);

	useEffect(
		() => {
			setcontactArray({
				//Valor inicial para los props
				agenda_slug: "franfossi",
				full_name: newName,
				address: newAddress,
				phone: newPhone,
				email: newEmail
			});
		},
		//Arreglo con los props
		[newName, newAddress, newPhone, newEmail]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={newName} // el valor escrito en new name
							onChange={event => setnewName(event.target.value)} // se secuestra en el arreglo setnewName
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={newEmail} // el valor escrito en new email
							onChange={event => setnewEmail(event.target.value)} // se secuestra en el arreglo setnewEmail
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={newPhone} // el valor escrito en new phone
							onChange={event => setnewPhone(event.target.value)} // se secuestra en el arreglo setnewPhone
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={newAddress} // el valor escrito en new address
							onChange={event => setnewAddres(event.target.value)} // se secuestra en el arreglo setnewAddress
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact(contactArray); // Acción addContact y Post de arrayContact hacia la url
						}}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back to Contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
