import React, {useState,useEffect} from "react";
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
// import ContactCard from './ocntactcard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const[contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: crypto.randomUUID(),...contact}]);

    console.log(contact);
  };
  useEffect(() =>{
  const contactRetrieve=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(contactRetrieve) setContacts(contactRetrieve);
},[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  const removeContactHandler =(id) => {
    const newCOntactList= contacts.filter((contact) =>{
      return contact.id !==id;

    });
    setContacts(newCOntactList);  
  }
  return (
<div className='ui container'>
  <Header />
  <AddContact addContactHandler={ addContactHandler} />
  <ContactList contacts = {contacts} getContactId={removeContactHandler} />

</div>
  );
}

export default App;
   