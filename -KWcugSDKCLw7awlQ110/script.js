//console log
function logArgs(args) {
  var args = 1
  console.log(args)
}
var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)

//function
function myfunction(a, b) {
  return a * b;
}
myfunction(4, 3);
var call = "12"
var functionString = myfunction.toString() + call
var functionExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
functionExample.html(formattedExample)


//function w/ a function
$("#function-input").keydown(function(e) {(	
  if (e.keyCode == "13") {
    $("#function-input").css(document.write("thanks!")
  }
})








//jquery
$("#button").click(function() {
  console.log("Jquery Example");
});

$(document).ready(function() {
  $('#colorblock').mouseenter(function() {
    $(this).animate({
      height: '+=10px'
    });
  });
  $('#colorblock').mouseleave(function() {
    $(this).animate({
      height: '-=10px'
    }); 
  });
  $('#colorblock').click(function() {
    $(this).toggle(1000);
  }); 
});

var functionString = button.toString()

var buttonExample = $("#button")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

buttonExample.html(formattedExample)


var input = $("#firebase-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("LIST", valueToSave);
  }
})

onNewListItem("LIST", function(value) {
  $("#firebase-display").append("<div>" + value + "</div>")
}) 
