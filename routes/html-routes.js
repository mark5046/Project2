var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function (req, res) {

    if (req.user) {
      res.redirect("/feed");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get("/feed", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/feed.html"));
  })

  app.get("/profile", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  })

  app.get("/popular", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/popular.html"));
  })
};
