"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to the database in Mongo
    saveTweet: function(newTweet, callback) {
          db.collection("tweets").insertOne(newTweet);
          callback();
    },
    // Get all tweets from Mongo database
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  };
};
