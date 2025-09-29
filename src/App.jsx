import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import EditContact from "./components/EditContact";
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), favorite: false, ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const updateContact = (updated) => {
    setContacts(contacts.map((c) => (c.id === updated.id ? updated : c)));
    setEditingContact(null);
  };

  const toggleFavorite = (id) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c));
  };

  const sortContacts = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  const exportContacts = () => {
    const data = JSON.stringify(contacts, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.json";
    a.click();
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone?.toLowerCase().includes(search.toLowerCase()) ||
    c.address?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>📞 Contact Manager</h1>
      
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={sortContacts}>Sort by Name</button>
        <button onClick={exportContacts}>Export Contacts</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {editingContact ? (
        <EditContact contact={editingContact} updateContact={updateContact} />
      ) : (
        <ContactForm addContact={addContact} />
      )}

      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        setEditingContact={setEditingContact}
        toggleFavorite={toggleFavorite}
      />

       <footer style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
      Developed by @Monalisa Sahoo 🚀
    </footer>
    </div>
  );
}

export default App;
