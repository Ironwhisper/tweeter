"use strict";

// Basic express setup
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
// Mongodb setup
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connecting Mongodb and the database to server
MongoClient.connect(MONGODB_URI, (err, dbConn) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  let db = dbConn.db('tweeter');
  // Datahelpers module with save and get tweets funcitons, operating on the db that is passed into it
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);
});

// Server initiate function
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
