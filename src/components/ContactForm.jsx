import React, { useState } from "react";
import './ContactForm.css';

function ContactForm({ addContact }) {
  const [contact, setContact] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) return;
    addContact(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;
