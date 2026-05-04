const express = require('express');
const app = express();

console.log(app.settings);
app.set("view engine" , "ejs");
console.log(app.settings);

// GET REQUEST
app.get('/', (req,res) => {
    const user = "Nikhlesh";
    res.render("index" , {name : user});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

