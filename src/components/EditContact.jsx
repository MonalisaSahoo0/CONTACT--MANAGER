import React, { useState } from "react";
import './EditContact.css';

function EditContact({ contact, updateContact }) {
  const [form, setForm] = useState(contact);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditContact;
