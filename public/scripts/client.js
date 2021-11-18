/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//doc ready func (anon)



$(document).ready(function() {

  const escape = str => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container      
    tweets.forEach(function(item) {
        const $tweet = createTweetElement(item);
        $('.tweet-container').prepend($tweet);
    });
  };

  function createTweetElement(data) {
    let $tweet = $("<article>").addClass("tweet");
    let tweetImage = escape(data.user.avatars);
    let username = escape(data.user.name);
    let userHandle = escape(data.user.handle);
    let tweetBody = escape(data.content.text);
    let tweetCreateDate = escape(data.created_at);
    let timeConvert = timeago.format(tweetCreateDate)

    const innerHTML=  `
   
              <header>
                  <img src=${tweetImage} >
                  <h4>${username}</h4>
                  <p>${userHandle}</p>
              </header>
              <p>${tweetBody}<p>
              <footer>
                  <span class="time-of-tweet">${timeConvert}</span>
                  <span class="icons">
                  <i id="flag" class="fas fa-flag"></i>
                  <i id= "retweet" class="fas fa-retweet"></i>
                  <i id= "heart" class="fas fa-heart"></i>
                 </span>
              </footer>
      `;
      $tweet.append(innerHTML);
    return $tweet;
  };

  const loadTweets = () => {
    $.ajax({
      url:'/tweets',
      method: 'get',
      dataType: 'json'
    })
    .then(function(res){
      renderTweets(res);
    })
  };

  $(".new-tweet").submit(function (event) {
   event.preventDefault();

    const serialVal = $(event.target.text).serialize();
    let tweet = $('textarea').val();
    let tweetLength = $('textarea').val().length;
    
    if(!tweet){
      $('.new-tweet p').empty().append('<b>Error:</b>Please enter a tweet.');
      $('.new-tweet p').slideDown("fast");
      $('.new-tweet p').slideUp(3000);
    } else if (tweetLength > 140) { 
      $('.new-tweet p').empty().append("<b>Error:</b> Your tweet is too long :( .");
      $('.new-tweet p').slideDown("fast");
      $('.new-tweet p').slideUp(3000);
    } else {
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serialVal,
      success: function() {
        alert ("success!")
      }
    })
    .then(loadTweets());
    
  }
  });
 loadTweets();
});


