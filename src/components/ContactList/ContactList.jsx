// ContactList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../redux/store';
import './ContactList.css';

const ContactList = () => {
  const contacts = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });
  const dispatch = useDispatch();

  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => dispatch(removeContact(contact.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};

export default ContactList;
