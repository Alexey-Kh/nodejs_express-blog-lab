// POSTS:
// - Obligatory fields are 'name', 'url', 'text'
// GET: ---
// POST: all required field are non-blank and text type
// UPDATE: all required field are non-blank and text type; post exists
// DELETE: post exists


// COMMENTS:
// GET: post exists
// POST: post exists; comment is non-blank and text type
// UPDATE: post exists; comment exists; comment is non-blank and text type
// DELETE: post exists; comment exists;

let isText = (testObject, callback, options = {}) => {
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
//check.postExists(postId)
//check.commentExists(commentId,postId)
module.exports.isText = isText
// module.exports.postExists = postExists
// module.exports.commentExists = commentExists
