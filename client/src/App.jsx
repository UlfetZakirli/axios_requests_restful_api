import React, { useEffect, useState } from 'react'
import AddUser from './components/AddUser'
import { Box, Grid, Paper, styled } from '@mui/material';
import DeleteUser from './components/DeleteUser';
import GetUsers from './components/GetUsers';
import UpdateUser from './components/UpdateUser';

const App = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
    minHeight: 400,
  }));



  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>CRUD with axios</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={5}
          columns={{ xs: 3, sm: 6, md: 12 }}
          sx={{ padding: 5, }}>
          <Grid item xs={3}>
            <Item>
              <GetUsers />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item >
              <AddUser />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <UpdateUser />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <DeleteUser />
            </Item>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default App