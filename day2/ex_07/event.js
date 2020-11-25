$(document).ready(function(){
    $("p").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });
$("p").click(function(){
  $(this).hide();
});


  