function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)





function perimeter(length, width) {
  console.log(length + length + width + width);
};


function whatsup(args) {
  var args = 1
  console.log(args)
};


var functionString = whatsup.toString()
var consoleLogExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)