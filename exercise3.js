var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var content = buf.toString()

var lines = content.split('\n')

console.log(lines.length - 1)
