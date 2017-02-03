const bl = require('bl')
const http = require('http')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var urlResults = {}
var num = 0

function httpget(i) {
  http.get(urls[i], function(response) {
    response.pipe(bl(function(err, data) {
      urlResults[urls[i]] = data.toString()
      num++

      if (num == urls.length) {
        for (var k in urls) {
          console.log(urlResults[urls[k]])
        }
      }
    }))
  })
}

for (var i=0; i<3 ; i++) {
  // defineCallback(i)
  httpget(i)
}
