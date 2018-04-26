var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Routes
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  var title = 'Welcome';
  res.render('index', {
    title: title
  });
});

app.get('/about', function(req, res){
  
  res.render('about');
});

app.get('/signin', function(req, res){
  
  res.render('signin');
})

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

