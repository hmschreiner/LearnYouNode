const http = require('http')
const url = require('url')

const port = process.argv[2]

const parseTime = (time, unixTime = false) => {

  let date = new Date(time)

  if ( unixTime ) {
    return {
      unixtime: date.getTime(),
    }
  }

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
}

http.createServer((req, res) => {

  let sendData = ''

  if ( req.method === 'GET' ) {

    let parseUrl = url.parse(req.url, true),
        isoDate  = parseUrl.query.iso;

    switch (parseUrl.pathname) {

      case '/api/parsetime':
        sendData = parseTime(isoDate)
        break;

       case '/api/unixtime':
       sendData = parseTime(isoDate, true)
       break;
    }

    res.writeHead(200, {
      'Content-Type' : 'application/json'
    })
    res.end(JSON.stringify(sendData))
  }

}).listen(port)
