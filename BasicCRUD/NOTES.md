All ejs file should be inside "views" named folder.

and the js file & views folder should be in same folder path.

I am using ejs and Express to make a basic CRUD application.

We often use POST in forms because browsers don;t support those method directly in HTML Form.

Solution : 

npm install method-override

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

<form action="/users/1?_method=DELETE" method="POST">
  <button>Delete</button>
</form>

INTERNAL WORKING
Browser sends:
POST /users/1?_method=DELETE
Middleware changes it to:
DELETE /users/1
Express matches:
app.delete("/users/:id")

DON'T NEED THIS IN MODERN PROJECTS , INSTEAD USE :
fetch()
Axios
Postman
Your own REST tool

We can directly use the HTTP method with them.
