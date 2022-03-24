import React, { useState } from "react";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);
  //   console.log(props);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
        name=""
        id=""
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Фамилия"
        value={surname}
        name=""
        id=""
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
        value={phone}
        name=""
        id=""
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditContacts;
