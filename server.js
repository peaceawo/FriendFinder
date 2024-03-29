// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers
require("./APP/routing/apiRoutes")(app);
require("./APP/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
