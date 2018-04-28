var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile_pic: req.body.profile_pic,
      github_link: req.body.github_link,
      bio: req.body.bio
    }).then(function () {
      res.redirect(307, "/feed");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/api/login", function (req, res) {

    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (data) {
      if (data === null) {
        console.log("this email does not exist") // FOR FRONT END - this console log needs to be displayed on html
      }
      else if (req.body.email === data.dataValues.email) {
        res.redirect("http://localhost:/feed")
      }
    })
  })

  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  app.post("/feed", function (req, res) {

  })


};
