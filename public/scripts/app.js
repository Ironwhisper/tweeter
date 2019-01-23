
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

function tweetValid(newTweet) {
  let arr = [];
  if (newTweet.length === 0){
    arr.push("You can't submit nothin'!");
    arr.push(false);
  }
  else if (newTweet.length > 140) {
    arr.push("You are over your character limit! Delete half yo crap!");
    arr.push(false);
  }  
  return arr;
}

$(function() {
  
  const $tweetForm = $('#form-01');
  const $tweetText = $('#new-text');


  $tweetForm.on("submit", function(event) {
    event.preventDefault();
    
    let tV = tweetValid($tweetText.val());
    if (tV[1] === false) {
      alert(tV[0]);
      return;
    }
    
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $tweetText.serialize(),
      success: function () {
        $('#article').empty();
        loadTweets();
      },
      error: function () {
          alert("error at POST");
      }
    }); 
  });

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        renderTweets(data)
      },
        error: function() {
        alert(error);
      }
    });
  }

  loadTweets();

});
