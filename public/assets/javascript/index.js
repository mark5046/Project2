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
});
