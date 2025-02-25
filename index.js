require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata= {
  "login": "durgeshshukla797",
  "id": 155382761,
  "node_id": "U_kgDOCULz6Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/155382761?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/durgeshshukla797",
  "html_url": "https://github.com/durgeshshukla797",
  "followers_url": "https://api.github.com/users/durgeshshukla797/followers",
  "following_url": "https://api.github.com/users/durgeshshukla797/following{/other_user}",
  "gists_url": "https://api.github.com/users/durgeshshukla797/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/durgeshshukla797/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/durgeshshukla797/subscriptions",
  "organizations_url": "https://api.github.com/users/durgeshshukla797/orgs",
  "repos_url": "https://api.github.com/users/durgeshshukla797/repos",
  "events_url": "https://api.github.com/users/durgeshshukla797/events{/privacy}",
  "received_events_url": "https://api.github.com/users/durgeshshukla797/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Durgesh Shukla",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-01-01T17:02:40Z",
  "updated_at": "2025-02-16T07:10:29Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('<h1>Welcome to duggu world</h1>')
})

app.get("/login",(req,res)=>{
     res.send('<h1>login page</h1>')
})

// now this time we'll send response in json format
app.get('/github',(req,res)=>{
       res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})