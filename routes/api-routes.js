var db = require("../models");
var passport = require("../config/passport");

// -----------------SIGN UP, LOGIN AND USER DATABASE--------------------------------------------------------

module.exports = function (app) {

  // AUTHENTICATES USER AT LOGIN AND DIRECTS TO FEEDS
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/feed");
  });

  // DISPLAYS USERS THAT ARE LOGGED IN
  app.get("/api/user_data", function (req, res) {
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

  // CREATES NEW USER AND DIRECTS TO LOGIN AT MAIN PAGE
  app.post("/api/users", function (req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile_pic: req.body.profile_pic,
      github_link: req.body.github_link,
      bio: req.body.bio
    }).then(function () {
      res.redirect("/feed");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for log out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // DISPLAYS ALL USERS IN THE DATABASE
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  // FIND USERS BY USERNAME
  app.get("/api/users/:username", function (req, res) {
    db.User.findAll({
      include: [db.Post],
      where: {
        username: req.params.username,
      }
    }).then(function (User) {
      res.json(User);
    });
  });

  // FIND USERS BY ID
  app.get("/api/users/:id", function (req, res) {
    db.User.findAll({
      include: [db.Post],
      where: {
        id: req.params.id,
      }
    }).then(function (User) {
      res.json(User);
    });
  });

  // UPDATE USER INFO
  app.put("/api/users", function (req, res) {
    db.User.update({
      email: req.body.email,
      password: req.body.password,
      profile_pic: req.body.profile_pic,
      github_link: req.body.github_link,
      bio: req.body.bio
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (result) {
        res.json(result);
      })
  });

  // -------------------------------POSTS--------------------------------------------------

  app.post("/api/posts", function (req, res) {
    db.Post.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category
    }).then(function () {
      res.redirect("/feed");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // DISPLAYS ALL POSTS IN THE DATABASE
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  // FIND POSTS BY TITLE
  app.get("/api/posts/:title", function (req, res) {
    db.Post.findAll({
      include: [db.User],
      where: {
        title: req.params.title,
      }
    }).then(function (Post) {
      res.json(Post);
    });
  });

  // FIND POSTS BY USER
  // app.get("/api/posts/:title", function(req, res) {
  //   db.Post.findAll({
  //     include: [db.User],
  //     where: {
  //       title: req.params.title,
  //     }
  //   }).then(function(Post) {
  //     console.log(Post);
  //     res.json(Post);
  //   });
  // });

  // FIND POSTS BY CATEGORY
  app.get("/api/posts/:category", function (req, res) {
    db.Post.findAll({
      include: [db.User],
      where: {
        category: req.params.category,
      }
    }).then(function (Post) {
      res.json(Post);
    });
  });

// ---------------------SEARCH----------------------------

//SEARCH USERS BY USERNAME THROUGH SEARCHBAR
app.get("/api/search", function (req, res) {
  db.User.findAll({
    where: {
      username: req.body.searchTerm
    }
  }).then(function (result) {
    res.json(result)
  })
})

}; // END LINE OF MODULE EXPORTS