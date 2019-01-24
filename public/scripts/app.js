//function to prevent user from leaving without posting if user wrote anything in the form
window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//to prevent the insertion of malicious code into the form element
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
//create a new tweet and factor it into existing html structure
function createTweetElement(tweet) {
  return `<article class="tweet-article">
  <img class="logo" src="${tweet.user.avatars.small}">
  <header>
    ${tweet.user.name}
      <span class="at">${tweet.user.handle}</span>
  </header>
  <p> 
  ${escape(tweet.content.text)} 
  </p>
  <footer>
    Created at: ${tweet.created_at}
  </footer>
</article>`
}

// loops through tweets, calls createTweetElement for each tweet, then 
// takes return value and appends it to the tweets container
function renderTweets(tweets) {
  tweets.forEach(tweetX => $('#article').append(createTweetElement(tweetX)))
}
//checks if the entered tweet is valid, that is not null and not over character limit
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
///////////////////////////////////////////////////////////////////////////////////////////

//document load function
$(function() {
  //prints out the error at the foot of the new tweet form
  function errorHandler(error) {
  $('#error').append(error);
  }
  //compose new tweet slide functionality
  $("#nav-bar .compose").click(function(){
    $("#tweet-input").slideToggle("slow")
    $('#new-text').focus();
  });
  //setting jquery'd stuff to variables for ease of use 
  const $tweetForm = $('#form-01');
  const $tweetText = $('#new-text');

  //new tweet submission and appending functionality
  $tweetForm.on("submit", function(event) {
    //stop from refreshing the page as per default browser spec
    event.preventDefault();
    //erase previous error message, if any
    $('#error').empty();
    //implementing check error function
    let tV = tweetValid($tweetText.val());
    if (tV[1] === false) {
      errorHandler(tV[0]);
      return;
    }

    //posting the new tweet to the database of tweets 
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $tweetText.serialize(),
      success: function () {
        $('#article').empty();
        loadTweets();
      },
      error: errorHandler(error)
    }); 
  });

  //loading the database of tweets onto main page
  function loadTweets() {
    $.ajax({
      url: "/tweets",
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        renderTweets(data.reverse())
      },
        error:  errorHandler(error)
    });
  }
  loadTweets();
});

///////////////////////////////////////////////////

window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};