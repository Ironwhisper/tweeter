// Function to prevent user from leaving without posting if user wrote anything in the form
window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};

// This function prevents the insertion of malicious code in new tweets
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Create a new tweet and factor it into existing html structure
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
  <input id="like" data-like='0' type="image" src="../images/like.jpg">
  </footer>
  </article>`
}
// Loops through tweets, calls createTweetElement for each tweet, then
// takes return value and appends it to the tweets container
function renderTweets(tweets) {
  tweets.forEach(tweetX => $('#article').append(createTweetElement(tweetX)));
}

// Checks if the entered tweet is valid, that is not 0 and not over character limit
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

// Document load function
$(function() {

  // Prints out the error at the foot of the new tweet form
  function errorHandler(error) {
    $('#error').append(error);
  }
  // Hiding the new tweet section upon loading page
  $("#tweet-input").hide();
  // Compose new tweet slide up and down functionality
  $("#nav-bar .compose").click(function(){
    $("#tweet-input").slideToggle("slow");
    $('#new-text').focus();
  });
  // Setting jquery'd stuff to variables for ease of use
  const $tweetForm = $('#form-01');
  const $tweetText = $('#new-text');
  // Like button functionality
  // let likeStatus = 0;


  $(document).on('click','#like', function(){
    let liked = document.getElementById('like');
    if (liked.getAttribute('data-like') === '0') {
      $(this).css('opacity','0.7');
      liked.setAttribute('data-like','1');
      // likeStatus = 1;
    } 
    else {
      $(this).removeAttr('style');
      liked.setAttribute('data-like','0');
      // likeStatus = 0;
    }
  });
  // New tweet submission and appending functionality
  $tweetForm.on("submit", function(event) {
    // Stop from refreshing the page as per default browser spec
    event.preventDefault();
    // Erase previous error message, if any
    $('#error').empty();
    // Turns out it's necessary to call hide funciton in order for slide to work
    $('#error').hide();

    // Implementing check error function
    let tV = tweetValid($tweetText.val());
    if (tV[1] === false) {
      errorHandler(tV[0]);
      $('#error').slideDown('slow');
      return;
    }

    // Posting the new tweet to the database of tweets
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $tweetText.serialize(),
      success: function () {
        $('#article').empty();
        document.getElementById("new-text").value = "";
        loadTweets();
      },
      error: errorHandler(error)
    });
  });

  // Loading the database of tweets onto main page
  function loadTweets() {
    $.ajax({
      url: "/tweets",
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        renderTweets(data.reverse());
      },
      error:  errorHandler(error)
    });
  }
  loadTweets();
});

// Prevent user from leaving without considering changes
window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'Do you want to leave the page and discard changes?';
  }
};