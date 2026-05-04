
// SET FUNCTION
app.set(key , value);
app.set("view engine", "ejs);

internal working 
Express has an internal object
app.settings ={}

when we call this set function ,it means
app.settings["view"] = "ejs";

And also app.engine("ejs", require("ejs")._express);
.ejs -> handled by EJS engine

Example : 
app.set("views", "./views");
default is already ./views

// RENDER FUNCTION
res.render("index", { name: "Nik" });

Internal process

Step 1: Resolve file path
"index" → "views/index.ejs"

Because:
views folder
.ejs extension from view engine

Step 2 : Call EJS engine
Express internally does something like:
ejs.renderFile("views/index.ejs", data, callback);

Step 3: EJS compiles template
EJS reads file:

<h1>Hello <%= name %></h1>

Step 4: Converts EJS → JavaScript function
Internally EJS turns template into something like:
function compiled(data) {
  return "<h1>Hello " + data.name + "</h1>";
}

Step 5: Execute function with data
compiled({ name: "Nik" });

Output:

<h1>Hello Nik</h1>

Step 6: Express sends response
res.send(finalHTML);


Minimal Internal Simulation

If you had to simulate manually:

const ejs = require("ejs");
ejs.renderFile("views/index.ejs", { name: "Nik" }, (err, str) => {
  res.send(str);
});

This is basically what Express hides for you

// DAY 4
either we use
res.render("index.ejs")

or
res.render("index")

to add file extension(.ejs) we need to set "ejs" (vslue )to "view engine" key

because internally 

res.render("index");
uses this structure

let engine = app.get("view engine"); // "ejs"
let filename = "index." + engine;    // "index.ejs"

function render(viewName) {
  let engine = app.get("view engine");
  if (!viewName.includes(".")) {
    viewName = viewName + "." + engine;
  }
  // then load and render file
}
