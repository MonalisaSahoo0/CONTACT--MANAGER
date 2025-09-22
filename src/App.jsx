import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const updateContact = (updated) => {
    setContacts(contacts.map((c) => (c.id === updated.id ? updated : c)));
    setEditingContact(null);
  };

  return (
    <div className="app">
      <h1>📞 Contact Manager</h1>
      {editingContact ? (
        <EditContact contact={editingContact} updateContact={updateContact} />
      ) : (
        <ContactForm addContact={addContact} />
      )}
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App;
