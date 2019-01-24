"use strict";

// Simulates the kind of delay we see with network or filesystem operations

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db` in Mongo
    saveTweet: function(newTweet) {

        db.collection("tweets").insertOne(newTweet);
    },

    // Get all tweets in `db`, from Mongo
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }

  };
}
