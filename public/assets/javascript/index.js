$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $("#navbar").removeClass("navbar");
      $("#navbar").addClass("navbar-shrink");
      $("#main-logo").removeClass("logo");
      $("#main-logo").addClass("logo-shrink");
      $("#name").hide();
    } else {
      $("#navbar").removeClass("navbar-shrink");
      $("#navbar").addClass("navbar");
      $("#main-logo").removeClass("logo-shrink");
      $("#main-logo").addClass("logo");
      $("#name").show();
    }
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
