function toggleMenu(){
  var display = $(".menuitem").css("visibility");
  if (display == "hidden"){
    $(".menuitem").css("visibility", "visible");
    $("#menu").css("background-color", "black");
  }else if (display == "visible") {
    $(".menuitem").css("visibility", "hidden");
    $("#menu").css("background-color", "transparent");
  }
}
