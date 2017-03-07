$(document).ready(function() {

  $("#fullpage").fullpage({
    anchors: ["page1", "page2", "page3", "page4"],
    menu: "#menu"
  });

  //when clicked on the signin button a modal will show up
  $("#modalSignIn").on("click",function() {
    $("#signInModal").modal();
  });

  //when clicked on the signup button a modal will show up
  $("#modalSignUp").on("click", function() {
    $("#signUpModal").modal();
  });

});
