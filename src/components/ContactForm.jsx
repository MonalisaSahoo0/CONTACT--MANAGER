import React, { useState } from "react";
import './ContactForm.css';
import './Form.css';

function ContactForm({ addContact }) {
  const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });

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
    if (!contact.name || !contact.email || !contact.phone) return;
    if (errors.email || errors.phone) return; // prevent submission if errors exist
    addContact(contact);
    setContact({ name: "", email: "", phone: "", address: "" });
    setErrors({ email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="input-group">
        <input name="name" value={contact.name} onChange={handleChange} placeholder="Name" />
      </div>

      <div className="input-group">
        <input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="input-group">
        <input name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="input-group">
        <input name="address" value={contact.address} onChange={handleChange} placeholder="Address" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;
