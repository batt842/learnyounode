var fs = require('fs')
var buf = fs.readFile(process.argv[2], function(err, data) {
    var content = data.toString()
    var lines = content.split('\n')
    console.log(lines.length - 1)
});

