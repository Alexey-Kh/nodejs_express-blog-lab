const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require(path.join(__dirname, 'routes'))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.text())

app.get('/posts/', routes.posts.getPosts)
app.post('/posts/', routes.posts.addPost)
app.put('/posts/:postId/', routes.posts.updatePost)
app.delete('/posts/:postId/', routes.posts.removePost)

app.get('/posts/:postId/comments/', routes.comments.getComments)
app.post('/posts/:postId/comments/', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId/', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId/', routes.comments.removeComment)

app.listen(3000)
