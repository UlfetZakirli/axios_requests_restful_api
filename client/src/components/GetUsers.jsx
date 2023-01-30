import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GetUsers = () => {

    const [users, setUsers] = useState([])
    console.log({ users });

    // useEffect(() => {
    //     getAllUsers()
    // }, [])

    const getAllUsers = async (e) => {
        await axios.get('http://localhost:8000/users').then((res) => {
            setUsers(res.data)
        })
    }
    return (
        <Box>
            <h1>GetUsers</h1>
            <Box
                sx={{
                    minHeight: 330,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                }}
                component="form"
            >

                {
                    users.map((user) => (
                        <Box key={user.id}>
                            <p>{user.id} | {user.firstName} | {user.lastName} | {user.email}</p>
                        </Box>
                    ))
                }
                <Button onClick={getAllUsers} variant="contained">GET</Button>

            </Box>
        </Box>
    );
}

export default GetUsers