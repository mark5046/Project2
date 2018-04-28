$(document).ready(function () {
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var usernameInput = $("input#username-input")

  $("#submit-btn").on("click", function (event) {
    event.preventDefault()

    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.username) {
      return;
    }

    // $.post("/api/users", userData).then(function (data) {
    //   console.log(data)
    //   // FOR FRONT END - we need the bottom console logs (errors) to be displayed on html
    //   if (data === "") {
    //     window.location.href = "/feed"; // doesnt work
    //   }
    //   if (data.errors[0].message === "Validation len on username failed") {
    //     console.log("Your username needs to have minimum 6 and maximum 14 characters");
    //   }
    //   else if (data.errors[0].message === "Validation len on password failed") {
    //     console.log("Your password needs to have minimum 6 and maximum 14 characters");
    //   }
    //   else if (data.errors[0].message === "email must be unique") {
    //     console.log("Provided email already exists");
    //   }
    //   else if (data.errors[0].message === "username must be unique") {
    //     console.log("Provided username already exists");
    //   }
    //   else if (data.errors[0].message === "Validation isEmail on email failed") {
    //     console.log("Please fill out your email address correctly");
    //   };
    // });

    signUpUser(userData.email, userData.password, userData.username);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
  })

  function signUpUser(email, password, username) {
    $.post("/api/users", {
      email: email,
      password: password,
      username: username
    }).then(function(data) {
      console.log(data)
      // FOR FRONT END - we need the bottom console logs (errors) to be displayed on html
      
        window.location.href = "/feed"; // doesnt work
      
      // else if (data != null) {
      //   if (data.errors[0].message === "Validation len on username failed") {
      //     console.log("Your username needs to have minimum 6 and maximum 14 characters");
      //   }
      //   else if (data.errors[0].message === "Validation len on password failed") {
      //     console.log("Your password needs to have minimum 6 and maximum 14 characters");
      //   }
      //   else if (data.errors[0].message === "email must be unique") {
      //     console.log("Provided email already exists");
      //   }
      //   else if (data.errors[0].message === "username must be unique") {
      //     console.log("Provided username already exists");
      //   }
      //   else if (data.errors[0].message === "Validation isEmail on email failed") {
      //     console.log("Please fill out your email address correctly");
      //   };
      // }
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
