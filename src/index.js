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
    const tweet = req.body
    tweets.push(tweet)
    res.send(tweets)
})
/* if (tweets.length === 10){
    const olderTweet = tweets.shift()
    tweets = deleteFirstItem(olderTweet, tweets)
}
function deleteFirstItem(firstItem, array){
    const newArray = array.filter((item) => item !== firstItem)
    return newArray
}
 */
app.get("/tweets", (req, res) => {
    
})



app.listen(5000);