$(document).ready(function () {
    var titleInput = $("input#title-input");
    var descriptionInput = $("input#description-input");
    var categoryInput = $("#category-input").val();
    var repolinkInput = $("#repolink-input")
  
    $("#submit-post").on("click", function (event) {
      event.preventDefault()
  
      var postData = {
        title: titleInput.val().trim(),
        description: descriptionInput.val().trim(),
        category: categoryInput,
        repo_link: repolinkInput.val()
      };
      if (!postData.title || !postData.description || !postData.repo_link) {
        return;
      }
      $.post("/api/posts", postData).then(function (data) {
        window.location.href = "/feed"

      })
    
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
})