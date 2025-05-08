import React, {useState,useEffect} from "react";
import './App.css';
import Header from './Header';
// import ContactCard from './ocntactcard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const LOCAl_STORAGE_KEY = "contacts";

  const[contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);

    console.log(contact);
  };
  useEffect(() =>{
    localStorage.setItem(LOCAl_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
<div className='ui container'>
  <Header />
  <AddContact addContactHandler={ addContactHandler} />
  <ContactList contacts = {contacts}/>

</div>
  );
}

export default App;
