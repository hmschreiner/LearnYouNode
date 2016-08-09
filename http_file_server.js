const http = require('http')
const fs = require('fs')

let port = parseInt(process.argv[2]),
    file = process.argv[3];

http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  
  fs.createReadStream(file)
    .pipe(res)
}).listen(port)
