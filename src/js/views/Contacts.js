import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	console.log("array de contactos", store.contacts);
	const [contact_id, setcontact_id] = useState();
	const [state, setState] = useState({
		showModal: false
	});

	const deleteContact = contact_id => {
		setcontact_id(contact_id);

		setState({
			showModal: true
		});
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div>
					{!store.contacts ? (
						<div className="container">
							<p>LOADING</p>
						</div>
					) : (
						store.contacts.map((item, index) => {
							return (
								<li key={index} className="list-group-item list-group-item-action">
									<div className="row">
										<div className="col-2">
											<img
												src="https://via.placeholder.com/200x300?text=PHOTO"
												alt="Foto Contacto"
												className="rounded-circle mx-auto d-block img-fluid"
											/>
										</div>

										<div className="col">
											<label className="name lead"> {item.full_name} </label>
											<br />

											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted">{item.address}</span>
											<br />

											<span
												className="fa fa-phone fa-fw text-muted mr-3"
												data-toggle="tooltip"
												title=""
												data-original-title=""
											/>
											<span className="text-muted small">{item.phone}</span>
											<br />

											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted small text-truncate">{item.email}</span>
										</div>
										<div className="col-2 float-right">
											<button className="btn">
												<Link to={"/EditContact/" + index}>
													<i className="fas fa-edit" />
												</Link>
											</button>
											<button className="btn" onClick={() => deleteContact(item.id)}>
												<i className="fas fa-trash" />
											</button>
										</div>
									</div>
								</li>
							);
						})
					)}
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} contact_id={contact_id} />
		</div>
	);
};

Contacts.propTypes = {
	item: PropTypes.object
};
