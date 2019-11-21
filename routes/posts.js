const path = require('path')
let store = require(path.join(__dirname, '..', 'store.js'))

module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts)
  },
  addPost(req, res) {
    let postsArr = store.posts
    let id = postsArr.length
    postsArr.push(req.body)
    res.status(201).send({'postId': postsArr[id]})
  },
  updatePost(req, res) {
    store.posts[req.params.postId] = req.body
    res.status(204).send()
  },
  removePost(req, res){
    store.posts.splice(req.params.postId, 1)
    res.status(200).send()
  }
}
