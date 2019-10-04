function checkForChanges(){
  if ($("#item1").hasClass('active')) {
    $("#Hola").css("background-image", "url(\"./img/bg1.png\")");
  }else if ($("#item2").hasClass('active')) {
    $("#Hola").css("background-image", "url(\"./img/bg2.png\")");
  }else if ($("#item3").hasClass('active')) {
    $("#Hola").css("background-image", "url(\"./img/bg3.png\")");
  }
  setTimeout(checkForChanges, 300)
}
jQuery(checkForChanges);


function toggleMenu(){
  var display = $(".menuitem").css("visibility");
  if (display == "hidden"){
    $(".menuitem").css("visibility", "visible");
  }else if (display == "visible") {
    $(".menuitem").css("visibility", "hidden");
  }
}
