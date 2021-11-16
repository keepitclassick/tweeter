$(document).ready(function() {
  $(".new-tweet textarea").on("keydown", function()  {
  let newTweetLength = $(this).val().length;
  let closeCounter = $(this).siblings('.counter');
  console.log("new",newTweetLength);
  console.log("count",closeCounter);
  });
});