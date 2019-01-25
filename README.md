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

    - Users can input their tweets by clicking *Compose* button and writing their message in a slick slide-out form.
    - Upon clicking **Tweet** their text will show up right below the compose form (which can slide right back up on subsequent Compose click).
    - **Error** messages will slide out right below the Tweet button, notifying user if his message exceeds the 140 character limit, or is *non-existant* at all.
    - Character limit of **140** is counting down remaining characters in *real-time*!
    - User names, handles and avatars for the tweets are randomly selected using ***Chance*** generator.
    - Tweets that already reside within the ***Mongo Database*** are displayed in reverse chronological order, will light up upon mouseover, and can even be liked!


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

## Screenshots

Here are some screens from actual app!

!["Write down your message!"](https://raw.github.com/Ironwhisper/tweeter/tree/master/Screenshots/Compose.png?raw=true)
!["See what others wrote!"](https://github.com/Ironwhisper/tweeter/tree/master/Screenshots/Tweets.png?raw=true)
!["Like what you like!"](https://github.com/Ironwhisper/tweeter/tree/master/Screenshots/Like.png?raw=true)