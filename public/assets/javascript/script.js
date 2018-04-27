$(document).ready(function() {
  var str =
      "<p> &lt;h1&gt; Welcome to Codegram, built by coders, for coders...&lt;/h1&gt; </p>",
    a = 0,
    itag,
    txt;

  (function type() {
    txt = str.slice(0, ++a);
    if (txt === str) return;

    document.getElementById("typewriter").innerHTML = txt;

    var charr = txt.slice(-1);
    if (charr === "<") itag = true;
    if (charr === ">") itag = false;

    if (itag) return type();
    setTimeout(type, 60);
  })();

  $(".landing-btn").hide();
  $("#landing-btn").show();

  $(".landing-btn")
    .delay(3000)
    .show(4000);

  $("#landing-btn")
    .delay(3500)
    .hide(4000);

  $(".landing-btn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top
      },
      1000
    );
  });

  var string = "<p> &lt;button&gt; About Us &lt;/button&gt;; </p>",
    i = 0,
    isTag,
    text;

  (function typee() {
    text = string.slice(0, ++i);
    if (text === string) return;

    document.getElementById("landing-btn").innerHTML = text;

    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    if (isTag) return typee();
    setTimeout(typee, 120);
  })();
});
