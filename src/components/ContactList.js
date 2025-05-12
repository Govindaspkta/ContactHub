import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log("ContactList props:", props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right floated">Add Contact</button>
      </Link>
      <div className="ui celled list">
        {renderContactList.length > 0 ? renderContactList : <p>No contacts available</p>}
      </div>
    </div>
  );
};

export default ContactList;