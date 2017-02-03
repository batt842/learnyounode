var fs = require('fs')
var buf = fs.readdir(process.argv[2], function(err, list) {
  for (var i = 0; i < list.length; i++) {
    var filepath = list[i];
    if (filepath.endsWith("." + process.argv[3]))
      console.log(filepath);
  }
})

