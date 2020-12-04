const Twit = require("twit");
require("dotenv").config();

var config = require("./config.json");
const triggerWord = config.triggerWord;
const messages = config.messages;

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

const stream = T.stream("statuses/filter", {
  track: config.twitterUserToTrack,
});

stream.on("tweet", (tweet) => {
  console.log("tweet from " + tweet.user.screen_name);
  if (tweet.text.toLowerCase().indexOf(triggerWord) !== -1) {
    reply(tweet.id_str);
  }
});

function reply(id) {
  const params = {
    status: `${generateRandomMessage()}`,
    in_reply_to_status_id: id,
    auto_populate_reply_metadata: true,
  };
  T.post(`statuses/update`, params, (err, data, response) => {
    if (err) console.log("error");
    if (!err) console.log("everything was fine");
  });
}

function generateRandomMessage() {
  return `${
    messages[Math.floor(Math.random() * messages.length)]
  } ^${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}
