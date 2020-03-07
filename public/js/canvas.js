window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  context.font = "bold 16px Arial";
  context.fillStyle = "red";
  context.fillText("PRAY FOR WUHAN!", 25, 45);
};

// Drag and Drop Me
//$(init);
//function init() {
//  $("#topPay").draggable();
//  $("#target").droppable();
//
//  $("#target").bind("drop", highlightTarget);
//  $("#target").bind("dropout", reset);
//}
//
//function highlightTarget(event, ui) {
//  $("#target").addClass("ui-state-highlight")
//      .html("Dropped")
//      .append(ui.draggable.text());
//}
//
//function reset(event, ui) {
//  $("#target").removeClass("ui-state-highlight")
//      .html("Drop on me");
//}


$(init);
function init() {
  $("#topPay").draggable();
  $(".wrap1").droppable();

  $(".wrap1").bind("drop", highlightTarget);
  $(".wrap1").bind("dropout", reset);
}

function highlightTarget(event, ui) {
  $(".wrap1").addClass("bg");
}

function reset(event, ui) {
  $(".wrap1").removeClass("bg");
}
