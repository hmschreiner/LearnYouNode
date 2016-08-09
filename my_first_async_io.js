const fs = require('fs')

let file = process.argv[2]

fs.readFile(file, 'utf8', (error, data) => {

  if (error) console.error
  let lines = data.split('\n').length - 1
  console.log(lines)
})
