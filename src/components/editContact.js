import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = ({ contacts, updateContactHandler }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((c) => c.id === id) || { name: '', email: '' };
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  useEffect(() => {
    if (!contact.name && !contact.email) {
      alert("Contact not found");
      navigate('/');
    }
  }, [contact, navigate]);

  const update = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Both name and email are required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
    updateContactHandler({ id, name, email });
    setName('');
    setEmail('');
    console.log("Updated contact:", { id, name, email });
    navigate('/');
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;