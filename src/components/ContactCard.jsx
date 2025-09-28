import React from "react";
import './ContactCard.css';

function ContactCard({ contact, deleteContact, setEditingContact, toggleFavorite }) {
  return (
    <div className="card">
      <div className="card-info">
        <p><strong>{contact.name}</strong> - {contact.email}</p>
        <p>📞 {contact.phone || "N/A"} | 🏠 {contact.address || "N/A"}</p>
      </div>
      <div className="card-buttons">
        <button onClick={() => setEditingContact(contact)}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
        <button className="favorite" onClick={() => toggleFavorite(contact.id)}>
          {contact.favorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
