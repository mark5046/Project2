$(document).ready(function () {
    var titleInput = $("input#title-input");
    var descriptionInput = $("input#description-input");
    var categoryInput = $("input#category-input option:selected").text()
  
    $("#submit-post").on("click", function (event) {
      event.preventDefault()
  
      var postData = {
        title: titleInput.val().trim(),
        description: descriptionInput.val().trim(),
        category: categoryInput
      };
  
      if (!postData.title || !postData.description || !postData.category) {
        return;
      }
  
      signUpUser(postData.title, postData.description, postData.category);
      titleInput.val("");
      descriptionInput.val("");
      categoryInput.val("");
    })
  
    function signUpUser(title, description, category) {
      $.post("/api/posts", {
        title: title,
        description: description,
        category: category
      }).then(function (data) {
        window.location.href = "/feed"

      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  