$(document).ready(function () {
  
    $("#like-btn").on("click", function (event) {
      event.preventDefault()
      
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
      
    })
  
  });
  