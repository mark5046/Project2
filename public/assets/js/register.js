$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var userInput = $("input#username-input")
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password || !userData.username) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.username, userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
      usernameInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username, email, password) {
      $.post("/register", {
        username: username,
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  