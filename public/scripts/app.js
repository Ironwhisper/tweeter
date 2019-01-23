
window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};



const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTextElement(text) {
  return `<article class="tweet-article">
  <img class="logo" src="../images/smiley01.svg">
  <header>
    USERNAME
      <span class="at">@user</span>
  </header>
  <p> 
  ${text}
  </p>
  <footer>
    Created at: NOW
  </footer>
</article>`
}

function createTweetElement(tweet) {
  return `<article class="tweet-article">
  <img class="logo" src="${tweet.user.avatars.small}">
  <header>
    ${tweet.user.name}
      <span class="at">${tweet.user.handle}</span>
  </header>
  <p> 
  ${tweet.content.text}
  </p>
  <footer>
    Created at: ${tweet.created_at}
  </footer>
</article>`
}

// loops through tweets, calls createTweetElement for each tweet, then 
//takes return value and appends it to the tweets container
function renderTweets(tweets) {
  tweets.forEach(tweetX => $('#article').append(createTweetElement(tweetX)))
}



$(function() {
  
  const $tweetForm = $('#form-01');
  const $tweetText = $('#new-text');

  $tweetForm.on("submit", function(event) {
    event.preventDefault();
    const $tweetText = $('#new-text');
    const $form = $
    

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $tweetText.serialize(),
      success: function () {
        $('#article').append(createTextElement(this.data))
      },
      error: function () {
          alert("error at POST");
      }
    });
    $.ajax({
      url: '/',
      type: 'GET',
      data: $tweetText.serialize(),
      success: function () {
      },
      error: function () {
        alert("error at GET")
      }  
    }); 
    // $.ajax('/', { method: 'POST' })
    // .then(function (tweet) {
    //   createTweetElement(tweet)
    //   $button.replaceWith(morePostsHtml);

  });
});

$(function() {
  renderTweets(data);
});