var http = require('http')
var url = require('url')

var portNumber = Number(process.argv[2])

function isoTimeToDate(s) {
  return Date.parse(s)
}

var server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.end("Only GET method available")
    return
  }

  requestUrl = url.parse(request.url, true)

  if (requestUrl.pathname === '/api/parsetime') {
    var date = new Date(requestUrl.query['iso'])
    var model = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(model) + "\n")
  } else if (requestUrl.pathname === '/api/unixtime') {
    var isoDate = (requestUrl.query['iso'])
    var model = {'unixtime': Date.parse(isoDate)}

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(model) + "\n")
  } else {
    response.writeHead(404)
    response.write('')
  }

  response.end()
})

server.listen(portNumber)
