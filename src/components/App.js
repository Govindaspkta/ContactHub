import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './editContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("Initial retrieved contacts:", savedContacts ? JSON.parse(savedContacts) : null);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContactHandler = (contact) => {
    const newContact = { id: crypto.randomUUID(), ...contact };
    console.log("Adding contact:", newContact);
    setContacts([...contacts, newContact]);
  };

  const updateContactHandler = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    console.log("Updating contact:", updatedContact);
    setContacts(updatedContacts);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    console.log("Removing contact with id:", id);
    setContacts(newContactList);
  };

  useEffect(() => {
    console.log("Saving contacts to localStorage:", contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit/:id"
            element={<EditContact contacts={contacts} updateContactHandler={updateContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;