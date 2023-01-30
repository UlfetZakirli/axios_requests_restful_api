import express from "express"
import cors from "cors"
import "colors"
import { v4 as uuid } from 'uuid'

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

let users = [
    { id: '1', firstName: 'Ulfat', lastName: 'Zakirli', email: 'ulfat@gmail.com' },
    { id: '2', firstName: 'Aynure', lastName: 'Zakirli', email: 'aynure@gmail.com' },
    { id: '3', firstName: 'Jale', lastName: 'Sadiqova', email: 'jale@gmail.com' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const { firstName, lastName, email } = req.body
    const newUser = {
        id: uuid(),
        firstName,
        lastName,
        email
    }
    users.push(newUser)
    return res.send(users)
})

app.put('/users/:id', (req, res) => {
    const { firstName, lastName, email } = req.body
    const { id } = req.params

    const user = users.find((user) => user.id === id)
    if (user) {
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
    }
    return res.send(user)

})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    return res.send(users)
})

const PORT = 8000
app.listen(PORT, () => console.log(`Server running port:http://localhost:${PORT}`.green.bold))