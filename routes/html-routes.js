var path = require("path");

var Authentication = require("../config/middleware/authentication");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", Authentication, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
