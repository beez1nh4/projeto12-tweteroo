 //npx nodemon src/index
 //fuser -k 5000/tcp

import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
const users = []
let tweets = []


app.post("/sign-up", (req, res) => {
    const user = req.body
    const {username, avatar} = req.body
    if (!username || !avatar){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }
    users.push(user)
    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body
    if (!username || !tweet){
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }
    const userFormat = users.find((user) => user.username === username)
    const {avatar} = userFormat
    const tweetFormat =
    {
		username: username,
		avatar: avatar,
		tweet: tweet
	}
    tweets.push(tweetFormat)
    res.status(201).send("OK")
    //res.send(tweets)
})

app.get("/tweets", (req, res) => {
    let recentTweets = []
    if (tweets.length > 10){
        let numberOfTweetsToIgnore = tweets.length - 10
    for (let i = 1; i < numberOfTweetsToIgnore+1; i++){
        let olderTweet = tweets.shift()
        recentTweets = tweets.filter((item) => item !== olderTweet)
    }
    res.send(recentTweets)
    return
    }
    
    res.send(tweets)
})

app.get('/tweets/:USERNAME', (req, res) => {
    const usernameParam = req.params.USERNAME;
    const selectedTweets = tweets.filter(tweet => tweet.username === usernameParam);
    res.send(selectedTweets);
  });


app.listen(5000,() => {
    console.log('Running on http://localhost:5000')
  });