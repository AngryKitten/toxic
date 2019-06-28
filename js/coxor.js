$(document).ready(function () {
  var color = "red";
  $("#select span").click(function () {
    if (!$(this).hasClass("selected")) {
      color = $(this).attr("data-color");
      $("#select span").each(function () {
        $(this).removeClass("selected");
      });
      $(this).addClass("selected");
    }
  });
  $("#reset").click(function () {
    $("#squares").empty();
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        $("#squares").append("<div class=\"square\"></div>");
      }
    }
  });
  $("#squares").on("click", ".square", function () {
    if (!$(this).hasClass("square-" + color)) {
      $(this).removeClass("square-red square-blue square-green").addClass("square-" + color);
    }
  });
  $("body").keydown(function (event) {
    if (event.which == 82) {
      $("#select-red").click();
    }
    if (event.which == 71) {
      $("#select-green").click();
    }
    if (event.which == 66) {
      $("#select-blue").click();
    }
  });
});