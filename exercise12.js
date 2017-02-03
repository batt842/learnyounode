var http = require('http')
var map = require('through2-map')

var portNumber = Number(process.argv[2])

var server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    // do something...
    response.end("Fuck")
    return
  }

  request.pipe(map(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(response)
})

server.listen(portNumber)
