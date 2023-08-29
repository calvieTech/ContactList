import React from "react";
import "../styles/ContactRow.css";

function ContactRow({ contact, setSelectedContactId }) {
	return (
		<>
			<tr onClick={() => setSelectedContactId(contact.id)}>
				<td className="contact__person">{contact.name}</td>
				<td className="contact__person">{contact.email}</td>
				<td className="contact__person">{contact.phone}</td>
			</tr>
		</>
	);
}

export default ContactRow;
