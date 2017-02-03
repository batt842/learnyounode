var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
  var date = new Date()
  var dateText = strftime("%Y-%m-%d %H:%M\n", date)
  console.log(dateText)
  socket.end(dateText)
})

server.listen(process.argv[2])
