/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//doc ready func (anon)

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1636989751621
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1637076151621
  },
  {
    "user": {
      "name": "Testy McTester",
      "avatars": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABFFBMVEUQfXojHyDktpLxyaUmJCHrwJzvxqIPgH0Ae3knHxz0zKf4z6oAeXgmIR4nHRoYFxvrvJYOEBdzYVNuWUvEpIi6lXkpgXwCCBLkxaMnGhe7nIKxjnQiHB4Ub2wSdXLruJMiGBoeTEklKSYaGxoZYF0gQT4bWFUWaWYTFhcAABAUFBkcUlAfSkciOzkjMi8kLSpVSj+BaVbQro/JoYJYjYIxU08jEhQrdXAybWgoFRGehW5YTEA0Lyrbt5eLcVw/Ny9Dg3vRs5Kppo1uk4S1qY6Jm4h1eGidp5LTv594mYrAtZrDrZCusJakhGuUnYjYrIpMgHc+R0E7Kyc3RUBMZ144NzNCUUo8OTQ1Yl1FbGNLWE89MCvGxza6AAAKbklEQVR4nO2de1faSBiHQ4hMEpIYUMFouMhNxSrgvYJCb1u7reuqdetuv//32JnciJALqMnMcPL7owc1njOP73XeZFKGSZQoUaJEiRIlSpQoUaJEiRIlSpQoUaJEOASgcK8hQgGm1Gi1GiXc64hKoLzFaYqgvOcaC2rGPVngOE7oNJgFBdxXIB+nNReLrzz+eIAMyAl7C8XHlFo2D9gyAd8tFiBobVlAoGG4KNeR8K7orQX2bZOBGreIPspI3L5JBLY1g1DZXjDCkiZbhPuySWjW+oXpamDwaSZS2QS0bAgaTsUv0R2XYE8QtkwkM89wAkID7947ztrEub55VCp7fdeoEM4HJLkJ4BeKZl/Q2qfEX0HLM4OAdzInoIoImpaXcjUGlGDSsa4uK7SUR9Dc8iQ0wMrjRAMDsWF8tvJPU/P8PQIFDmqe34Y25OQDN6G8X0YOa3DBEkJNfQQdxbUfcva4MNOg7LLv8lJO3oMfrTg8kKkhZGpyx/4IpO1GY7uMIEHD7EUPSnamQZFoFw2UYAVavJSpOS01aGiKoghyZ08CRlJBdpNr3DOhlMowHZkeQnAgc5q1jYDFwICApbCMvu8pYRuAlmKjUiAjzhQrpkDLckmBa7QEb0K5VmbMxIN55bPKTCnKlplhLCsixmbNmxAiNgWzPlIiM+CEzrbB6CoOPoDOjzRaxm7AWrXWLKEpTNnHOacltGgJRKfxVA4aJWB67SySaWlMLTc11gwrRXNvVhtyAi2E4J3bavLMXsop1AyHy35ZM0TyAS2EsJd5GaJASzaFhf5liAItbY1d9ucXRfM30OBewkhPJKK7Z00toIvxNSI1m0QoUGrKihdkvb6DVK97IWr0+CmD7NhodoQJyJ2dbu9iY2PjIt8feGHWSjQhMgDw5Wf7wuLw4lLMZkUR/bN0uXm1MqwXDYPWDevWd4qDEY972XPJGQAb9htsiFkx7UhcUlWWvV27uerlV7rdbr/fu1ljK8dUDb/LLgvuXKVdeEhLrCl1LPgVVYiuHrU+OMym096Ekzqmx1HHLWp9eClOAvoSsgVaEMdRWB9mpgH9CT/Q4qfO+Ncb0J+w8pEWRLtU1D1cNIiQrXyiw0/tIU1xYyrJhBCylwwViNZAY+fKGzCIsPIXFX5qEQ69+QIJWZWK3sYkLK56BmEIYeUzDUYsI8J618dHgwnZCg1FUUKpdOfQz4QhhFRUjA40Yd4XMJiQis4GVfwAE4YQVr6Qb0TwR73e9QcMs+EH4m3Ijy5TOxcvJ6wQXzD4r9n+zpI/YCgh8VVfus6urviWinBC8rcYfDYtBpkwlLBC+FSK/xZkv5kIv5AdiNKPgCQzGyHhRV9afy0he0k2IRPCNwMhS3Qg8sdhJgwnVIne6ocnmnBCsocZ0tfX27DykWBCXvrz9YTsd4lYRGn0I4xvFkL28zGZjDzzQwy14EyElcp3EreJfOE6NMvMSAgZCbyNwTOuWi9mvWRa2CJUPeWCJG4X5coxYmbjKj+t3uYhupGICNWjm97KtHqbt2PGQ9xEE+KPHRcVV1PF9vK02sXd/qGYzajsUb+Y874itekgkrZRlK7HgEU95aPl3W7vqtctLvtdoBfXxlYkKtu4u7Wh7/oRYxsaL+jnw3G2+UYU4RfHSZd2AwDCVbwdl0WiCF1OGkyoL/v6sEm45hBe4qZ6pjHhRjGILzfs/84FMeZcuYagQOTB+kyEuryRybCbcgCim5CgksgX0jMR7sKKuASrYcAlbkKC+poZbdjOZ42Kr674p1NCbcgAp2ULIsxdmD2NepOjjpCfKdMUNyzCzZkIiSr54yHiGxJ+JwiQ4T9l35yQrMEpX1h/e0KCUinjclPx0L+n2V21dk9rAX+FI9tJCbuTyI/sQMy0/VefsXfA/jZs230pWY03g+aIViSKPb/l53qiTbjie03eyTMkRaEpOxIzA+/l5wZLzhTj9rffNbYJCXx4iB85Q4x8Ozetdi/jntPk29MXtZcdC1Y+kWdCuAu2q342fbg6qcO05cX2JIo9WpvUEevkUTIfyXDNE8VpOTtkNlQVltSnvnnmy+Rz69MKv29R+UhSuzYh/i3uAQMyZ/qWpE+vvo9PViszLfBaQpXQEHQkrb+SkMBK/1yhgRj2TBRROwovhd7npv65NqbwOht+wL3+cI0HGi8hJN9Jnw34X0JIeq1gXB34iwjJmuT7SAp20+An2Qm7aeitkGxK/2kEiPhyG1JxoiTswajAMzMU5BkkHryUkPiOzZYzlZqTkMDZjI94EPAcbcAJS0qiEEkKqPoBNqQjkZqSruc/2VX5Ro8J0VBqbkKafBRJ8i379J/HtyT9mPMcMDV51JH05zxnuYmccYeI572fN/UkJHTGHSbe04pehCqFFkTiPWNxmpDcIX64JI8p/xQhmQ91zyppdJ0VAwkr7F88xYAo33xbzwYQVj6PqPVQWxJ0VV9CldCTFfOJZ9YzvjakOQRdWs9ALT6hrcUkTC88obj4hOnFJ0ynF58wvfiEFuNCExqMC064mBWf5wMI6XgHXZAAKPz9NWBv8fHvAs3/CxvEe7rTV4J2T+qK3n0aUQkJF31+8uu0qutcICGn69XT4cm/lJkSgLOnhwHEc57u9t3jG8+969Xq/cPPM1ogId5JR4HGs59f3xR9Ccfng6Aplc4JBZAQb29QrbqP3y0/f8Pgc8Ku+4wXNOWAcEjonI+n1cnThe1Vv2qhrk0eXYBB+fh0RigjAOcPwhSeYURfG3qditar93fnBfIgQeFk4IVnROJF1pNQvfI5dqEb3oob6ZnA2cO0d7oQXW/cHROqN/4HiKC33hHEiPhCTmiPER3CoPNdBuTp3TkZjDD8tGA+dIb7yp59L41dNPS3tF8EMILCQ4B7jpXrHmbHZ2ZU9WgYbEGLsXo3wssImCetOsNKU+idGP2NJTGbzaiqervZ3w16d4SbUfuJM6+C88GMfAZjcbmfv7ro5fsp/3d/TKs6wOeq4GQmB3VDttu54Fd/eEivnuBCfJjDgK9S9Q4PYCcuQIj4iAPwMT5ALIigGScgRHyIORbB+WmsgKnU6VO8iOBxziz6aunDmI0YtwmhEc/j5APn8UYhUrxVEdb62An1+1gJB3GHIVQ1Tjc9i9+E0Ij/xGdE0MBCOCjER/gPBieN1U1BBw9hfG56puAATOm/4nJT8IQjDKFOz+IibGJxUuimsfWmsTellvS7mAjL8Tellt7HQ4gtDGPrvsEDJieNrfsG99gI9V+xEBawhSFUHBURx97QkRZHIOLYGzqq/ozBTeMf0bikxzFyK+Dji2kHtY3RSWEgRt+aYqz3SNV/oyfEV+8NwuhrfqGGlTCG5rus4QRM6fdRA2IOwxh2wVjrPVLku2Cs9d4gjDzV4A1DGIjdiAljv284JSVaQuyJBrrpKFpCvPXeIIx2AwUGuAFT1Uakbop1f28R/hcpIc79vaVoZzWgRQBhLcotIgGJJpW6j7Jvw3Rb7bmq2xESnsm48VJoExxhIOKdYFiK8n4+AR0NlL4fISEJiSalP0aYTA+IIPwdHWEZz/37SWnleRb9P+LtRxCqjBZFAAAAAElFTkSuQmCC",
      "handle": "@myface"
    },
    "content": {
      "text": "Testing for Testy McTester"
    },
    "created_at": 1637076134321
  },
]


$(document).ready(function() {

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container      
    data.forEach(function(item) {
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

  renderTweets(data);

});

