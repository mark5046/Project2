var path = require("path");

var Authentication = require("../config/middleware/authentication");

module.exports = function(app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get("/feed", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/feed.html"));
  })

  
};
