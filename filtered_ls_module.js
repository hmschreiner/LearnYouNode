const fs   = require('fs')
const path = require('path')

const filteredFileList = (dir, ext, callback) => {

  // Concats a dot to the given extension
  ext = '.' + ext

  fs.readdir(dir, (err, list) => {

    if (err) return callback(err)

    let filesList = list.filter(file => {

      let fileExt = path.extname(file)

       if ( fileExt && fileExt == ext ) {
         return true
       }

       return false
     })

     callback(null, filesList)
  })
}

module.exports = filteredFileList
