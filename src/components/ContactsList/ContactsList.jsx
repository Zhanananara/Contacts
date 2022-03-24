import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ContactsList = (props) => {
  //   console.log(props);
  return (
    <div className="d-flex">
      {props.contacts.map((item, index) => (
        <Card style={{ width: "18rem", margin: "20px" }}>
          <ListGroup variant="flush">
            <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
            <ListGroup.Item>{item.surname}</ListGroup.Item>
            <ListGroup.Item>{item.phone}</ListGroup.Item>
          </ListGroup>
          <button onClick={() => props.handleDeleteContact(item.id)}>
            Delete
          </button>
          <button onClick={() => props.handleEditIndex(index)}>Edit</button>
        </Card>
      ))}
    </div>
  );
};

export default ContactsList;
