const path = require('path')
const check = require(path.join(__dirname, '..', 'validator.js'))
let store = require(path.join(__dirname, '..', 'store.js'))

module.exports = {
  getComments (req, res) {
    if (!check.postExists(req.params.postId, (e) => res.status(400).send(e))) return
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  addComment(req, res) {
    let errorCallback = (e) => res.status(400).send(e)
    if (!check.postExists(req.params.postId, errorCallback) ||
        !check.isText(req.body, errorCallback, {nonBlank: true}))
        return
    let commentsArr = store.posts[req.params.postId].comments
    let id = commentsArr.length
    commentsArr.push(req.body)
    res.status(201).send({'commentId': commentsArr[id], 'postId': req.params.postId})
  },
  updateComment(req, res) {
    let errorCallback = (e) => res.status(400).send(e)
    if (!check.postExists(req.params.postId, errorCallback) ||
        !check.commentExists(req.params.commentId, req.params.postId, errorCallback) ||
        !check.isText(req.body, errorCallback, {nonBlank: true}))
        return
    store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(204).send()
  },
  removeComment(req, res) {
    let errorCallback = (e) => res.status(400).send(e)
    if (!check.postExists(req.params.postId, errorCallback) ||
        !check.commentExists(req.params.commentId, req.params.postId, errorCallback))
        return
    store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(200).send()
  }
}
