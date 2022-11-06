 //npx nodemon src/index

import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
const users = []
let tweets = []


app.post("/sign-up", (req, res) => {
    const user = req.body
    users.push(user)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body
    const userFormat = users.find((user) => user.username === username)
    const {avatar} = userFormat
    const tweetFormat =
    {
		username: username,
		avatar: avatar,
		tweet: tweet
	}
    tweets.push(tweetFormat)
    res.send("OK")
    //res.send(tweets)
})

app.get("/tweets", (req, res) => {
    if (tweets.length > 10){
        let numberOfTweetsToIgnore = tweets.length - 10
    for (let i = 1; i < numberOfTweetsToIgnore+1; i++){
        let olderTweet = tweets.shift()
        tweets = tweets.filter((item) => item !== olderTweet)
    }
    }
    
    res.send(tweets)
})



app.listen(5000);