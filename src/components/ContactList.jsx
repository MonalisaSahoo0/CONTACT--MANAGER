import React from "react";
import ContactCard from "./ContactCard";
import './ContactList.css';

function ContactList({ contacts, deleteContact, setEditingContact, toggleFavorite }) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p className="no-contacts">No contacts yet.</p>
      ) : (
        contacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            deleteContact={deleteContact}
            setEditingContact={setEditingContact}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
