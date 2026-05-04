const express = require('express');
const app = express();

// MIDDLWARE
app.use(express.json());

// DATA STORAGE
let users = [];

// SERVER CHECKING
app.get('/', (req, res) => {
    res.send("Server is running");
});

// READING ALL DATA
app.get('/users', (req, res) => {
    res.json(users);
});

//  READING SPECIFIC DATA
app.get('/users/:id', (req, res) => {
    const user = users.find(u => Number(u.id) === req.params.id);
    if(!user){
        return res.status(405).json({message: "user not found"});
    }
    res.json(user);
});

// SENDING DATA
app.post('/users', (req,res) => {
    const user = {
        id: Date.now(),
        name:req.body.name
    };
    users.push(user);
    res.status(201).json(user);
});

// UPDATE DATA
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    user.name = req.body.name;
    res.json(user);
});

// DELETE DATA
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({message: "Deleted Successfully"});
});


// RUNNING SERVER
app.listen(3000, () => {
    console.log("Server running on PORT 3000");
});