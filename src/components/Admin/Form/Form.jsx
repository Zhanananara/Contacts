import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Input } from "@mui/material";
import { useParams } from "react-router-dom";
// import "./Form.css";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //todo ===> EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);

  //todo ===> END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
    };
    saveValues(obj);
  };

  return (
    <div className="form-border">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "grey",
        }}
      >
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
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
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Кардиология"}>Кардиология</MenuItem>
            <MenuItem value={"Неврология"}>Неврология</MenuItem>
            <MenuItem value={"Хирургия"}>Хирургия</MenuItem>
            <MenuItem value={"Терапия"}>Терапия</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Дата рождения "
          variant="standard"
          margin="normal"
        />
        <TextField
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Аллергия"
          variant="standard"
        />
        <TextField
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Состояние"
          variant="standard"
          multiline
          rows={3}
          margin="normal"
        />
        {/* <TextField
          name="date"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Дата госпитализации"
          variant="standard"
          multiline
          rows={3}
          margin="normal"
        /> */}

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default Form;
