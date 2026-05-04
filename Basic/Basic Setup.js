const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

// DEFAULT PAGE
// app.get('/', (req , res) => {

//     res.send("Responded Successfully !");

//     // res.end(); // use only one response
// });


// GET REQUEST
app.get('/status', (req , res) => {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.query);

    res.send("Responded Successfully !");
});

// POST REQUEST
app.post('/submit', (req , res) =>{
    res.send("submitted successfully");
});

app.listen(3000, () =>{
    console.log("Running at PORT 3000");
});