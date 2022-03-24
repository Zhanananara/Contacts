import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");
  //   console.log(name, surname, phone);

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    // console.log(newContact);
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div className="container mt-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            value={name}
            name=""
            id=""
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Enter Surname"
            value={surname}
            name=""
            id=""
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Enter Phonenumber"
            value={phone}
            name=""
            id=""
          />
        </Form.Group>

        <Button onClick={handleClick}>Add contact</Button>
      </Form>
    </div>
  );
};

export default AddContact;
