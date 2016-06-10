//start back-end logic//

//step 1: call function "coder" to perform on the message
//step 2: find and replace characters and spaces with nothing using the regular expression ""/x/g, y"
//step 3: get the value of the message length
//step 4: set variable output to empty
//step 5: run a math methods on the messageLength to calculate the square root and then round up to determine how many columns the grid should be, and set this value to "skip"
//step 6: begin first for loop to make the characters fill in the grid based on the number of columns
//step 7: begin 2nd for loop to get the output to run the length of the message, "skipping" every time the letter reaches the skip point (end of columns)
//step 8: add characters into output string

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

//step 1: declare an empty array
//step 2: start a for loop to find the 5th character and insert a space after that character
//step 3: to determine every 5th character, start an if statement. if the character is divisible by 5, then use the slice method to select the elements starting at "i" and then ending at "i+5" (because it ends at, but does not inlude, the given end argument)
//step 4: push each of these strings (5 character in length) in the array finalMessage
//step 5: use the join method to join each string together in the final message array with spaces between each string
  var finalMessage = [];
  for(i=0; i<output.length; i++) {
    if (i%5 === 0){
      finalMessage.push(output.slice(i, i+5));
    }
  }
  return finalMessage.join(" ");
}

//end of back-end logic//

//start of front-end logic//
//step 1: tell jquery to run this function with the document is ready by using the $ sign
//step 2: within this function, run another funtion in the event that the form "pig-latin" is submitted (user clicks the submit button)
//step 3: event.preventDefault(); If this method is called, the default action of the event will not be triggered. This allows the results to be displayed below
//step 4: tell jquery to get the user input message value and set it to the varible userInput
//step 5: run the function "coder" on the userInput, and set it to the varible finalMessage
//step 6: use the toLowerCase method to make all the characters in the message lowercaseMessage
//step 7: tell jquery to put the message where the p tags are in the html

$(document).ready(function() {
  $("#cryptosquare").submit(function(event) {
  event.preventDefault();
  var userInput = $("#message").val();
  var finalMessage = coder(userInput);
  var lowercaseMessage = finalMessage.toLowerCase();
  $("p").text(lowercaseMessage);
  });
});
//end of front-end logic//
