import React, { useState } from "react";
import './EditContact.css';
import './Form.css';

function EditContact({ contact, updateContact }) {
  const [form, setForm] = useState(contact);
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Real-time validation
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors(prev => ({ ...prev, email: emailPattern.test(value) ? "" : "Invalid email format" }));
    }
    if (name === "phone") {
      const phonePattern = /^\d{10}$/;
      setErrors(prev => ({ ...prev, phone: phonePattern.test(value) ? "" : "Phone must be 10 digits" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    if (errors.email || errors.phone) return;
    updateContact(form);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="input-group">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      </div>

      <div className="input-group">
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="input-group">
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="input-group">
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      </div>

      <button type="submit">Update</button>
    </form>
  );
}

export default EditContact;
