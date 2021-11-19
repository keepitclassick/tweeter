/*
  Responds to input on textarea with the class new-tweet
  Updates the counter to be the current input length
  Checks the length of the input to see if the 'setRed' styling class needs to be added or removed
 */


$(document).ready(function() {
  $(".new-tweet textarea").on("input", function()  {
    let tweetLength = $(this).val().length;
    let remainingLength = 140 - tweetLength

    $(".counter").text(remainingLength);
    if (remainingLength < 0) {
        $(".counter").text(remainingLength).addClass("setRed");
    } else {
        $(".counter").text(remainingLength).removeClass("setRed");
    }      
  });
});