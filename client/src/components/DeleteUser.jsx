import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';

export default function DeleteUser() {

  const deleteUser = async (e) => {
    e.preventDefault()
    try {
      await axios.delete(`http://localhost:8000/users/${e.target.id.value}`)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box>
      <h1>DeleteUser</h1>
      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={deleteUser}
      >
        <TextField id="id" label="Id" variant="outlined" />
        <Button type='submit' variant="contained">DELETE</Button>

      </Box>
    </Box>
  );
}