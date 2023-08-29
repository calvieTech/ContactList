import { useState, useEffect } from "react";
import "../styles/SelectedContact.css";

function SelectedContact({
	selectedContactId,
	setSelectedContactId,
}) {
	const [contact, setContact] = useState(null);

	useEffect(() => {
		const fetchAContact = async () => {
			try {
				const response = await fetch(
					`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
				);
				const data = await response.json();
				setContact(data);
			} catch (err) {
				console.error(err.message);
				throw new Error(err.message);
			}
		};
		fetchAContact();
	}, [selectedContactId]);
	console.log(contact);

	return (
		<>
			{contact && (
				<>
					<table>
						<thead>
							<tr>
								<th
									colSpan="5"
									className="contact__heading">
									<h2>Selected Contact View</h2>
								</th>
							</tr>
						</thead>
						<tbody className="contact__container">
							<tr>
								<td className="contact__title">Name</td>
								<td className="contact__title">UserName</td>
								<td className="contact__title">Email</td>
								<td className="contact__title">Phone</td>
								<td className="contact__title">Website</td>
							</tr>
							<tr>
								<td className="contact__person">
									{contact.name}
								</td>
								<td className="contact__person">
									{contact.username}
								</td>
								<td className="contact__person">
									{contact.email}
								</td>
								<td className="contact__person">
									{contact.phone}
								</td>
								<td className="contact__person">
									{contact.website}
								</td>
							</tr>
						</tbody>
					</table>
					<button
						className="contact__goBack"
						onClick={() => {
							setSelectedContactId(null);
						}}>
						Go back
					</button>
				</>
			)}
		</>
	);
}

export default SelectedContact;
