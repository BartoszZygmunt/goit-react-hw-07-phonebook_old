// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '../../redux/store';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Phone Book</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
