import React from 'react';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
