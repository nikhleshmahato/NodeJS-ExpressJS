# NodeJS-ExpressJS
These are my Express.js code files , created throughout the Learning and Development journey

2. EJSIntegration  
The index.ejs file should be inside "views" folder 
app.js & "views" folder should be in same folder path

Express does NOT know how to render .html files by default using res.render().

When we write:

res.render('request');

Express tries to:

Look inside views/
Find request.html
Use a view engine to render it

But "html" is not a valid view engine unless you explicitly configure one.

SOLUTION 1:
step 1 : views/request.html -> reques.ejs
step 2 : app.set("view engine", "ejs"); //middleware

✔ Now Express knows:
Use EJS to render files
Look for .ejs inside views/


SOLUTION 2 : 
To serve actual plain html file, then don't ues render() , Instead

const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'request.html'));
});
This sends the file directly (no templating engine)

# Important Concept

res.render() is like:

"Take a template + inject data + generate HTML"

So it requires a template engine (like EJS, Pug, Handlebars).

But .html is just static — no engine → no rendering.

TIP : 
res.render	Dynamic templates (EJS)
res.sendFile	Static HTML file

