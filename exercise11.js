var http = require('http')
var fs = require('fs')

var portNumber = Number(process.argv[2])
var filePath = process.argv[3]

var server = http.createServer((request, response) => {
  var stream = fs.createReadStream(filePath)

  // stream.on('data', (chunk) => {
  //   response.write(chunk)
  // })
  // stream.on('end', () => {
  //   response.end()
  // })

  stream.pipe(response)
})

server.listen(portNumber)
