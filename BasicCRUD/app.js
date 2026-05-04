const express = require('express');
const app = express();
// MIDDLEWARE
app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");

// STORAGE
let users =[
    {id: 1, name:"nikhlesh",age:20},
    {id: 2, name:"rohit",age:25}
];
// GET REQUEST
app.get('/', (req,res) => {
    res.render("index" , {users});
});
app.get('/create', (req,res) => {
    res.render("create");
});

// POST REQUEST
app.post('/create', (req, res) => {
    const {name,age} = req.body;
    const newUser = {
    id: Date.now(), // unique id
    name,
    age
  };

    users.push(newUser);
    res.redirect("/");
});

// UPDATE - Show edit form
app.get("/edit/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.render("edit", { user });
});

// UPDATE - Modify user
app.post("/edit/:id", (req, res) => {
  const { name, age } = req.body;

  users = users.map(u =>
    u.id == req.params.id ? { ...u, name, age } : u
  );

  res.redirect("/");
});

// DELETE - Remove user
app.post("/delete/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.redirect("/");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

