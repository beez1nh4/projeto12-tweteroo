import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
const users = []
const tweets = []


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
    //res.send("OK")
    res.send(tweets)
})
/* if (tweets.length === 10){
    const olderTweet = tweets.shift()
    tweets = deleteFirstItem(olderTweet, tweets)
}
function deleteFirstItem(firstItem, array){
    const newArray = array.filter((item) => item !== firstItem)
    return newArray
} */
app.get("/tweets", (req, res) => {
    res.send(tweets)
})



app.listen(5000);