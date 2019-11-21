const path = require('path')
const postsRoutes = require(path.join(__dirname, 'posts.js'))
const commentsRoutes = require(path.join(__dirname, 'comments.js'))

module.exports.posts = postsRoutes
module.exports.comments = commentsRoutes
