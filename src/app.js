const express = require('express')
const app = express()
const db = require('./utils/database')
const postRouter = require('./posts/posts.router')

app.use(express.json())



db.authenticate()
    .then(() => {
        console.log('Databases credentials are corrects')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync() 
    .then(() => {
        console.log('Database sincronized correctly')
    })
    .catch((err) => {
        console.log(err) 
    })

app.use('/api/v1', postRouter)


app.listen(9000,() => {
    console.log("Server started at http://localhost:9000")
})
app.get('', (req, res) =>{
	res.json({message: "Hello, World!"})
})

module.exports = app
