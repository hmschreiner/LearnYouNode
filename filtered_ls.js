const fs   = require('fs')
const path = require('path')

let dir = process.argv[2]
let ext = process.argv[3]

// Concats a dot to the given extension
ext = '.' + ext

fs.readdir(dir, (err, list) => {

  if (err) throw err

  list.map(file => {

    let fileExt = path.extname(file)

     if ( fileExt && fileExt == ext ) {
       console.log(file)
     }
   })

})
