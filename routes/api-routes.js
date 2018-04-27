var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.json("/feed");
  });

  app.post("/register", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
      profile_pic: req.body.profile_pic,
      github_link: req.body.github_link,
      bio: req.body.bio
    }).then(function() {
      res.redirect(307, "/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/userdata", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
