require('dotenv').config()
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 9001;
var db = require("./models");
var passport = require("./config/passport");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
