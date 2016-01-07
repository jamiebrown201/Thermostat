$(document).ready(function() {
  $("button").on("click", function(){
      $(this).hide();
  });
  $("h1").on("click", function(){
    $(this).slideUp("fast");
  });
});
