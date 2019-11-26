const path = require('path')
const check = require(path.join(__dirname, '..', 'validator.js'))
let store = require(path.join(__dirname, '..', 'store.js'))

module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts)
  },
  addPost(req, res) {
    if (!check.isText([req.body.name, req.body.url, req.body.text], (e) => res.status(400).send(e), {nonBlank: true})) return
    let postsArr = store.posts
    let id = postsArr.length
    postsArr.push(req.body)
    res.status(201).send({'postId': postsArr[id]})
  },
  updatePost(req, res) {
    if (!check.postExists(req.params.postId, (e) => res.status(400).send(e))) return
    store.posts[req.params.postId] = req.body
    res.status(204).send()
  },
  removePost(req, res){
    if (!check.postExists(req.params.postId, (e) => res.status(400).send(e))) return
    store.posts.splice(req.params.postId, 1)
    res.status(200).send()
  }
}
