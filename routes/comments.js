const path = require('path')
let store = require(path.join(__dirname, '..', 'store.js'))

module.exports = {
  getComments (req, res) {
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  addComment(req, res) {
    let commentssArr = store.posts[req.params.postId].comments
    let id = comentsArr.length
    commentsArr.push(req.body)
    res.status(201).send({'commentId': commentsArr[id], 'postId': req.params.postId})
  },
  updateComments(req, res) {
    store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(204).send()
  },
  removeComment(req, res) {
    store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(200).send()
  }
}
