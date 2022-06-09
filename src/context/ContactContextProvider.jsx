import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { firestore } from "../../src/firebase";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import "./Form.css";
import Stack from "@mui/material/Stack";
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

const ContactContextProvider = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [datehp, setDatehp] = useState("");
  const [blood, setBlood] = useState("");
  const [doctor, setDoctor] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  //Creating new message
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
      setName("");
      setBlood("");
      setData("");
      setDatehp("");
      setDescription("");
      setDoctor("");
      setType("");
      navigate("/list");
    } catch (err) {
      console.log(err);
    }

    getContacts();
    // console.log(collection);
  }

  //Render of contacts
  const getContacts = async () => {
    const docRef = query(
      collection(firestore, "contacts"),
      orderBy("createdAt")
    );
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

  useEffect(() => {
    getContacts();
  }, []);
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

  return (
    <div>
      <div style={{ display: "flex" }}>
        <IconButton onClick={() => navigate(-1)}>arrowback</IconButton>
        <h2>Добавить пациента</h2>
      </div>
      <div className="form-border">
        <TextField
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="ФИО"
          variant="standard"
          sx={{ color: "white" }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Переведен</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={"Кардиология"}>Кардиология</MenuItem>
            <MenuItem value={"Неврология"}>Неврология</MenuItem>
            <MenuItem value={"Хирургия"}>Хирургия</MenuItem>
            <MenuItem value={"Терапия"}>Терапия</MenuItem>
          </Select>
        </FormControl>

        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            value={date}
            label="Дата рождения"
            type="date"
            defaultValue="2022-06-07"
            onChange={(e) => setDate(e.target.value)}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>

        <div className="blood">
          <TextField
            name="blood"
            value={blood}
            onChange={(e) => setBlood(e.target.value)}
            id="standard-basic"
            label="Резус фактор"
            variant="standard"
          />
        </div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Состояние</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="description"
            value={description}
            label="Type"
            onChange={(e) => setDescription(e.target.value)}
          >
            <MenuItem value={"Удовлетворительное"}>Удовлетворительное</MenuItem>
            <MenuItem value={"Средней тяжести"}>Средней тяжести</MenuItem>
            <MenuItem value={"Тяжелое"}>Тяжелое</MenuItem>
            <MenuItem value={"Терминальное"}>Терминальное</MenuItem>
          </Select>
        </FormControl>

        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            value={datehp}
            onChange={(e) => setDatehp(e.target.value)}
            label="Дата госпитализации"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Лечащий врач</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="doctor"
            value={doctor}
            label="Type"
            onChange={(e) => setDoctor(e.target.value)}
          >
            <MenuItem value={"Усеналиев Чолпонбек Эркинбекович"}>
              Усеналиев Чолпонбек Эркинбекович
            </MenuItem>
            <MenuItem value={"Матиев Ысакбек Рашидович"}>
              Матиев Ысакбек Рашидович
            </MenuItem>
            <MenuItem value={"Тынчтыкбеков Талант Тынчтыкбекович"}>
              Тынчтыкбеков Талант Тынчтыкбекович
            </MenuItem>
            <MenuItem value={"Исаева Айгерим Сапаргалиевна"}>
              Исаева Айгерим Сапаргалиевна
            </MenuItem>
            <MenuItem value={"Жаманкулова Фарида ахмеджановна"}>
              Жаманкулова Фарида Ахмеджановна
            </MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          onClick={() => addContact()}
          sx={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default ContactContextProvider;
