var coder = function(message) {
  message = message.replace(/[.'",(){};:-?!`~\s]/g, "");
  var messageLength = message.length;
  var output = "";
  var skip = Math.ceil(Math.sqrt(messageLength));
  for(var offset=0; offset<skip; offset++) {
    for(var i=offset; i<messageLength; i+=skip) {
      output = output + message[i];
    }
  }

  var finalMessage = [];
  for(i=0; i<output.length; i++) {
    if (i%5 === 0){
      finalMessage.push(output.slice(i, i+5));
    }
  }
  return finalMessage.join(" ");
}


$(document).ready(function() {
  $("#cryptosquare").submit(function(event) {
  event.preventDefault();
  var userInput = $("#message").val();
  var finalMessage = coder(userInput);
  $("p").text(finalMessage);
  });
});
