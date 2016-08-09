const net = require('net')

let port = parseInt(process.argv[2])

const zeroFill = number => (number < 10) ? '0' + number : number

const server = net.createServer(socket => {

  let date    = new Date(),
      year    = date.getFullYear(),
      month   = zeroFill(date.getMonth() + 1),
      day     = zeroFill(date.getDate()),
      hour    = zeroFill(date.getHours()),
      minutes = zeroFill(date.getMinutes());

  socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n')
  socket.end()
})

server.listen(port)
