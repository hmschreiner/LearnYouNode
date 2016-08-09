const http = require('http')

const port = process.argv[2]


http.createServer((req, res) => {

  let postData = ''

  if ( req.method === 'POST' ) {

    req.on('data', data => {
      postData += data
    })

    req.on('end', () => res.end(postData.toUppercase()))
  }

  req.on('post', (req, res) => res.send(req.body.split().join())

}).listen(port)
