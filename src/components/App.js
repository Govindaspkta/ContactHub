import './App.css';
import Header from './Header';
// import ContactCard from './ocntactcard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const contacts = [
    {
      id:"1",
      name:"govinda",
      email:"sapgovinda05@gmail.com",
    },
    {
      id:"2",
      name:"Aashish",
      email:"sapgovinda@gmail.com"
    }

  ];
  return (
<div className='ui container'>
  <Header />
  <ContactList contacts={contacts}/>
  <AddContact />

</div>
  );
}

export default App;
