import React from "react";
import ContactCard from "./ContactCard";
import './ContactList.css';

function ContactList({ contacts, deleteContact, setEditingContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            deleteContact={deleteContact}
            setEditingContact={setEditingContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
