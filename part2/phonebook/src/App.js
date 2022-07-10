import Search from './components/Search';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './App.css';
import { useState, useEffect } from 'react';
import contactServices from './services/contactServices'
import { v4 as uuidv4 } from 'uuid';
import Notification from './components/Notification';

function App() {
  const [contacts, setContacts] = useState([])
  const [contactName, setContactName] = useState("")
  const [searchText, setSearchText] = useState("")
  const [contactMobile, setContactMobile] = useState("")
  const [message, setMessage] = useState(null)


  // ! Fetch All Contacts from the server
  useEffect(() => {
    console.log('Fetch Contacts List')
    contactServices.getContacts().then((contacts) => {
      setContacts(contacts)
    })
  }, [])

  const filteredContacts = () => {
    if (searchText === "") {
      return contacts
    } else {
      return contacts.filter((contact)=>contact.name.toLowerCase().includes(searchText))
    }
  }

  const allContacts = filteredContacts();

  
// ! Adding a New Contact 
  const handleAddContact = (e) =>{
    e.preventDefault();

    // ? Cheking if the contact has already been added
    const check = (val) => {
      if(contacts.length > 0){
        if(contacts.some(contact => contact.name.toLowerCase().trim() === val.toLowerCase())){
          return false
        }else{
          return true
        }
      }else{
        return true;
      }
      
    }

    // ? Cheking of existing contacts called
    const validate = check(contactName.trim())
    console.log(validate)
    if(validate === true){
      console.log("Form Submitted")
    const newContact = {
      id: uuidv4(),
      name: contactName.trim(),
      number: contactMobile
    }

      contactServices.createContacts(newContact).then(newRecord => {
        console.log(newRecord);
        setContacts(contacts.concat(newRecord));
        setMessage({content: `Contact Added: ${newContact.name}`, type: 'success'});
        setTimeout(() => {
          setMessage(null)
        }, 3000);
        setContactMobile("")
        setContactName("")
      })
    }
    else {
      // ! Contact is already there, updating the contact information
      const updateContact = window.confirm(`${contactName.trim()} is already added to the phonebook. Do you wish to update the contact?`);
      if(updateContact){
        const getContact = contacts.find(contact => contact.name.trim().toLowerCase() === contactName.trim().toLowerCase());
        const changedContact = {...getContact, number: contactMobile}

        contactServices.updateContacts(getContact.id, changedContact).then(newRecord => {
          setContacts(contacts.map(contact => contact.name !== getContact.name ? contact : newRecord));
            setMessage({content: `Contact Updated: ${changedContact.name}`, type: 'success'});
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
        .catch((err) => {
          setMessage({content: `Information of ${contactName.trim()} is already removed from Server.`, type: 'error'});
        setTimeout(() => {
          setMessage(null)
        }, 3000);
        })
      }
    }
  }

  // ! Deleting a contact that is clicked
  const deleteContact = (contact) => {
    const confirm = window.confirm('Are you sure you want to delete this contact?');
    if(confirm){
      contactServices.deleteContacts(contact.id)
      setMessage({content: `Contact Removed: ${contact.name}`, type: 'success'});
        setTimeout(() => {
          setMessage(null)
        }, 3000);
      setContacts(contacts.filter(user => user.id !== contact.id))
    }
  }
  

  return (
    <div className="App">
        <h1>Phone Book</h1>
        <Notification message={message} />

        <Search handleSearch={setSearchText} />

        <h2>Add A New Contact</h2>
        <AddContact 
          handleAddContact={handleAddContact}
          contactMobile={contactMobile}
          contactName={contactName}
          setContactMobile={setContactMobile}
          setContactName={setContactName}
           />

         <h2>All Contacts</h2>
        <ContactList contacts={allContacts} deleteContact={deleteContact} /> 
    </div>
  );
}

export default App;
