import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function UpdateUser() {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })


  console.log(inputValue);

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const updateUser = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8000/users/${e.target.id.value}`, {
        id: e.target.id.value,
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        email: inputValue.email,
      })

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <Box>
      <h1>UpdateUser</h1>
      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={updateUser}
      >
        <TextField id="id" label="Id" variant="outlined" />
        <TextField name="firstName" label="First Name" variant="outlined" onChange={handleInputChange} />
        <TextField name="lastName" label="Last Name" variant="outlined" onChange={handleInputChange} />
        <TextField name="email" type="email" label="E-mail" variant="outlined" onChange={handleInputChange} />
        <Button type='submit' variant="contained">PUT</Button>

      </Box>
    </Box>
  );
}