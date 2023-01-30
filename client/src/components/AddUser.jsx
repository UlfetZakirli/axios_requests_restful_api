import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function AddUser() {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }


  const addUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/users', inputValue)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box>
      <h1>AddUser</h1>
      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={addUser}
      >
        <TextField name="firstName" label="First Name" variant="outlined" onChange={handleInputChange} />
        <TextField name="lastName" label="Last Name" variant="outlined" onChange={handleInputChange} />
        <TextField name="email" type="email" label="E-mail" variant="outlined" onChange={handleInputChange} />
        <Button type='submit' variant="contained">POST</Button>

      </Box>
    </Box>
  );
}