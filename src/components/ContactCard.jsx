import React from "react";
import './ContactCard.css';

function ContactCard({ contact, deleteContact, setEditingContact }) {
  return (
    <div className="card">
  <p><strong>{contact.name}</strong> - {contact.email}</p>
  <div className="card-buttons">
    <button onClick={() => setEditingContact(contact)}>Edit</button>
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </div>
</div>
  );
}

export default ContactCard;
