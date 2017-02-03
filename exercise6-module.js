var fs = require('fs')
var path = require('path')

module.exports = function (dirpath, fileext, callback) {
  fs.readdir(dirpath, function(err, list) {
    if (err)
      callback(err)
    else {
      result = list.filter( (filepath) => {
          return path.extname(filepath) === '.' + fileext
      });
      callback(err, result)
    }
  })
}
