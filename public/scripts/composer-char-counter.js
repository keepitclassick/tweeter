$(document).ready(function() {
  $(".new-tweet textarea").on("input", function()  {
    let tweetLength = $(this).val().length;
    // Check if tweet length becomes greater than 140
    let remainingLength = 140 - tweetLength;
    // Update the counter to remaining length
    $(".counter").text(remainingLength);
    // Set the character counter to red if it goes below 0 by adding a class
    if (remainingLength < 0) {
        $(".counter").text(remainingLength).addClass("setRed");
    } else {
        $(".counter").text(remainingLength).removeClass("setRed");
        // Refresh error message
        $(".error-message").text("");
    }      
  });
});