$(document).ready(function () {
    // var updateForm = $("form.update");
    // var emailInput = $("input#update-input");
    // var passwordInput = $("input#updatepassword-input");
    var profile_picInput = $("input#updatepic-input");
    var github_linkInput = $("input#updatelink-input");
    var bioInput = $("input#updatebio-input")
  
    $("#login-btn").on("click", function (event) {
      event.preventDefault()
      
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      $.post("/api/users", userData).then(function (data) {
      })
    })
  });
  