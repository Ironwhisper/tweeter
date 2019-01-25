# Tweeter Project

Tweeter is a simple, single-page Twitter clone. But what may look nice and simple on the *--outside*,
may in reality reflect a much deeper **filling**.

## Initializing

Before one can begin using this amazing Twitter clone, several things must be done:

 - Install all dependencies, as listed in the **'Dependencies'** section
 - Start up the server using *'npm start'* or *'npm run local'* commands
 - Look in the mirror and give yourself a thumbs up. You deserve it! :thumbsup: :thumbsup:

## Description

This project provides some very basic Twitter-like functionality
    1. Users can input their tweets by clicking *Compose* button and writing their message in a slick slide-out form.
    2. Upon clicking **Tweet** their text will show up right below the compose form (which can slide right back up on subsequent Compose click).
    3. **Error** messages will slide out right below the Tweet button, notifying user if his message exceeds the 140 character limit, or is *non-existant* at all.
    4. Character limit of **140** is counting down remaining characters in *real-time*!
    5. User names, handles and avatars for the tweets are randomly selected using ***Chance*** generator.
    6. Tweets that already reside within the ***Mongo Database*** are displayed in reverse chronological order, will light up upon mouseover, and can even be liked!


## Contributors

This project was built basing on starter code provided by Lighhouse Labs, thanks guys!
Also a big thanks to all the mentors who patiently helped me get through the muddy parts, you guys are ***awesome!***



## Dependencies

- Express
- Node 5.10.x or above
- Body-parse 1.15 plus
- Chance 
- Md5
- MongoDb version 3 and greater