const http = require('http')

let url = process.argv[2]
let streamData = []

const handleStream = (callback) => {

  let result = createStream();
  callback(result);
}

processStream = (url) => {

}

http.get(url, (response) => {

  let events = []

  response.setEncoding('utf8')
  response.on('data', data => events.push(data))
  response.on('error', error => console.error)

  response.on('end', () => {

    let data = events.reduce((data, event) => {
      return data += event
    })

    console.log(data.length)
    console.log(data)
  })

}).on('error', error => console.error)
