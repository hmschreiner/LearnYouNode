const http = require('http')
const urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4],
]
let dataHolder = []
let count = 0

const getUrl = (url, index) => {

  let events = []

  http.get(url, (response) => {

    response.setEncoding('utf8')
    response.on('data', data => events.push(data))
    response.on('error', error => console.error)

    response.on('end', () => {

      count++

      eventData = events.reduce((data, event) => {
        return data += event
      })

      dataHolder[index] = eventData

      if ( count >= 3 ) dataHolder.map(data => console.log(data))
    })

  }).on('error', error => console.error)
}

urls.map((url, index) => getUrl(url, index))
