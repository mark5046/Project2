$(document).ready(function () {
  var loginForm = $("form.login");
  var emailInput = $("input#loginemail-input");
  var passwordInput = $("input#loginpassword-input");

  $("#login-btn").on("click", function (event) {
    event.preventDefault()
    
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    $.post("/api/login", userData).then(function (data) {
      window.location.href = "/feed";
    })
  })
});
