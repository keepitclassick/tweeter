/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//doc ready func (anon)



$(document).ready(function() {

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container      
    tweets.forEach(function(item) {
        const $tweet = createTweetElement(item);
        $('.tweet-container').append($tweet);
    });
  };

  function createTweetElement(data) {
    let $tweet = $("<article>").addClass("tweet");
    let tweetImage = data.user.avatars;
    let username = data.user.name;
    let userHandle = data.user.handle;
    let tweetBody = data.content.text;
    let tweetCreateDate = data.created_at;
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

  $(".new-tweet").submit(function (event) {
    event.preventDefault();

    const serialVal = $(event.target.text).serialize();
    let tweet = $('textarea').val();
    let tweetLength = $('textarea').val().length;
  
    if(!tweet) {
      alert ("Please enter a tweet!");
    } else if (tweetLength > 140) {
      alert ("Tweet too long!");
    } else {
    $.ajax({
      type: "POST",
      url: "/tweets",
      datatype: "JSON",
      data: serialVal
    })
  }
  });

  const loadTweets = () => {
    $.ajax({
      url:'/tweets',
      method: 'get',
      dataType: 'json'
    })
    .then(function(res){
      renderTweets(res);
    })
  }
  loadTweets();
});


