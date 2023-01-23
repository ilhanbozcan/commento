const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Eric'
    },
]

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)
    if(!user)
        return res.status(404).send('user not found')

    return res.send(user)
})

app.post('/users', (req, res) => {
    const name = req.body.name
    users.push({id:5, name:name})
    res.send('user is created')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})