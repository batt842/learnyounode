var mod = require('./exercise6-module')

mod(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    console.log("err\n" + err)
    return
  }

  for (var i = 0; i < list.length; i++)
    console.log(list[i]);
})

