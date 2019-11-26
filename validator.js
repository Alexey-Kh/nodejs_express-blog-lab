// *POSTS*:
// - Obligatory fields are 'name', 'url', 'text'
// GET: ---
// POST: all obligatory fields are non-blank and string type
// UPDATE: all obligatory fields are non-blank and string type; post exists
// DELETE: post exists
// *COMMENTS*:
// GET: post exists
// POST: post exists; comment is non-blank and string type
// UPDATE: post exists; comment exists; comment is non-blank and string type
// DELETE: post exists; comment exists;

const path = require('path')
const store = require(path.join(__dirname, 'store.js'))

const isText = (testObject, callback, options = {}) => {
  if (Array.isArray(testObject)) {
    return testObject.every(e => isText(e, callback, options))
  }
  if (typeof testObject !== 'string') {
    callback("The submitted data is not a string.")
    return false
  }
  if (options.nonBlank == true && testObject.trim() == "") {
    callback("The submitted string is empty.")
    return false
  }
  return true
}

const postExists = (postId, callback) => {
  if (!store.posts[postId]) {
    callback("The post does not exist.")
    return false
  }
  return true
}

const commentExists = (commentId, postId, callback) => {
  if (!store.posts[postId].comments[commentId]) {
    callback("The comment does not exist.")
    return false
  }
  return true
}

module.exports.isText = isText
module.exports.postExists = postExists
module.exports.commentExists = commentExists
