// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/store';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    dispatch(addContact({ id: Date.now(), name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

ContactForm.propTypes = {
  children: PropTypes.node,
};

export default ContactForm;
