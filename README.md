# NodeJS-ExpressJS
These are my Express.js code files , created throughout the Learning and Development journey
# 1 BASIC SERVER 
# 2 EJSIntegration  (OLD)
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

# 3 CLIENT-SERVER ARCHITECTURE (MODERN)
or 
1. Full-stack architecture
2. SPA (Single Page Application) architecture
3. API-driven architecture
4. Jamstack (for some cases)

REST APIs
Authentication (JWT, Session)
Middleware
MVC pattern

Don't use server-rendered HTML (like EJS) for modern projects, Instead use :
React / Vue / Angular

API based Communication

separate Frontend & Backend

Advanced Modern Setup
1. SPA (Single Page Application)
React app loads once
Data fetched via APIs

2. SSR (Server-Side Rendering)
Done using Next.js
Better SEO + performance

3. Hybrid (Most modern)
Next.js (frontend + backend)
API routes + SSR + static pages

Phase 2 
Build REST APIs
Learn MongoDB
CRUD with API (no EJS)

Phase 3
Learn React
Connect React → Express API

Phase 4
Learn Next.js (modern full-stack)

What is a REST API ?
REST API is a set of URLs / routes that respond with data using HTTP Method,

like earlier responding data passed into a full ejs page,
now responding direct data using HTTP methods.
this concept is called REST API.









