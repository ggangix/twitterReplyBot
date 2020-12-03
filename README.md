# Twitter Reply Bot

Node.js application to reply to a certain work with random messages from a list

## Usage

1. Clone the repository
2. npm install
3. Add an .env file with the following structure:

```

TWITTER_API_KEY=
TWITTER_API_SECRET_KEY=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

```

4. Fill the config.json with the information that you want to use to your bot.

   - twitterUserToTrack: The twitter user that you want to listen for an specific word
   - triggerWord: The word that will trigger the reply.
   - messages: An array with replies to be selected randomly.

5. npm start and have fun!

## Motivation

This app is part of my [#100DaysOfCode challenge!][1]

## Feel free to contribute.

[1]: https://twitter.com/ggangix/status/1328031248808349696
