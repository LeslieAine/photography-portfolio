'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form mt-md'>
      <label>What is your name? *</label>
      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      <label>E-mail address *</label>
      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
      <label>Tell me what&apos;s up *</label>
      <textarea required name="message" value={formData.message} onChange={handleChange} className="form-control"></textarea>
      <button type="submit" className="btn btn-default">Send</button>
      <span className="p-md">* These fields are required</span>
    </form>
  );
};

export default ContactForm;
