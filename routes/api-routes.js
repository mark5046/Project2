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
        id: req.user.id,
        email: req.user.email,
        username: req.user.username,
        github_link: req.user.github_link,
        bio: req.user.bio
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

  // CREATES POST
  app.post("/api/posts", function (req, res) {
    if (req.user) {
    db.Post.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      username: req.user.username,
      repo_link: req.body.repo_link
    }).then(function () {
      res.redirect("/feed");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  }
  });

  // DISPLAYS ALL POSTS IN THE DATABASE
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (result) {
      res.json(result);
    })
  })

// ---------------------PROFILE---------------------------

// DISPLAY PROFILE OF LOGGED IN USER
app.get("api/users/:username", function(req, res) {
  db.User.findOne({
    where: {
      username: req.user.username
    }
  }).then(function(result) {
    res.json(result);
  });
});

// ---------------------SEARCH----------------------------

//SEARCH USER BY SEARCHTERM
app.get("/api/searchuser/:term", function(req, res) {
  db.User.findAll({
    where: {
      username: req.params.term
    }
  }).then(function (result) {
      res.json(result)
    })
  })

//SEARCH POSTS BY SEARCHTERM
app.get("/api/search/:term", function (req, res) {
  db.Post.findAll({
    where: {
      username: req.params.term
    }
  }).then(function (result) {
    res.json(result)
  })
})

// FIND POSTS BY TITLE
// app.get("/api/search/:term", function (req, res) {
//   db.Post.findAll({
//     where: {
//       title: req.params.term,
//     }
//   }).then(function (result) {
//     res.json(result);
//   });
// });

// FIND POSTS BY CATEGORY
// app.get("/api/search/:term", function (req, res) {
//   db.Post.findAll({
    
//     where: {
//       category: req.params.term,
//     }
//   }).then(function (result) {
//     res.json(result);
//   });
// });



}; // END LINE OF EXPORT