const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: [
				{
					agenda_slug: "franfossi",
					name: "",
					email: "",
					phone: "",
					address: ""
				}
			]
		},

		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			uploadContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/franfossi")
					.then(response => response.json())
					.then(data => {
						console.log("output", data);
						setStore({ contacts: data });
					});
			},
			addContact: contactArray => {
				console.log("input", contactArray);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contactArray),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("output", data);
						alert("nuevo contacto añadido");
						getActions().uploadContact();
					})
					.catch(error => console.error("Error:", error));
			},
			deleteContact: contact_id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contact_id, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("delete", data);
						getActions().uploadContact();
						alert("contacto eliminado");
					})
					.catch(error => console.error("Error:", error));
			},
			editContact: (agenda, contact_id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contact_id, {
					method: "PUT",
					body: JSON.stringify(agenda),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						alert("se ha editado el contacto", JSON.stringify(data));
						getActions().uploadContact();
					})
					.catch(error => console.log("Error:", error));
			}
		}
	};
};

export default getState;
