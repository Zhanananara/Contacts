import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContacts from "./components/EditContact/EditContacts";

function App() {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    // console.log(newContact);
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    // console.log(id);
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    // console.log(index);
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    // console.log(newContact);
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });

    setContacts(newContactsArray);
    setIsEdit(false);
  }

  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
