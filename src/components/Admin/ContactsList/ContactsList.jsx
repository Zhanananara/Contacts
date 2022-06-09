import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { firestore } from "../../../firebase";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Input, IconButton } from "@mui/material";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

const ContactList = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [datehp, setDatehp] = useState("");
  const [blood, setBlood] = useState("");
  const [doctor, setDoctor] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  //Creating new contact
  async function addContact() {
    try {
      await addDoc(collection(firestore, "contacts"), {
        name: name,
        type: type,
        doctor: doctor,
        date: date,
        description: description,
        datehp: datehp,
        blood: blood,
      });
      navigate("/list");
    } catch (err) {
      console.log(err);
    }

    getContacts();
    // console.log(collection);
  }

  useEffect(() => {
    getContacts();
  }, []);
  //Render of contacts
  const getContacts = async () => {
    const docRef = query(collection(firestore, "contacts"));
    // const docSnap = await getDocs(docRef);
    //console.log(docSnap);

    //here
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "doc here");
        msgs.push(doc.data());
      });
      setData(msgs);
    });
    // end

    // if (docSnap.empty) {
    //
  };

  // }, [data]);

  //Delete one message
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "contacts", id));
      //setData(data.filter((msg) => msg.id !== id));
    } catch (err) {
      console.log(err);
    }
    getContacts();
  };

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  // export default function BasicTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell align="right">Дата рождения </TableCell>
              <TableCell align="right">Резус фактор</TableCell>
              <TableCell align="right">Лечащий врач</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contacts) => (
              <TableRow
                key={contacts.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {contacts.name}
                </TableCell>
                <TableCell align="right">{contacts.date}</TableCell>
                <TableCell align="right">{contacts.blood}</TableCell>
                <TableCell align="right">{contacts.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactList;
