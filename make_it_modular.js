const filteredFileList = require('./filtered_ls_module')

let dir = process.argv[2]
let ext = process.argv[3]

filteredFileList(dir, ext, (err, data) => {

  if (err) throw err;

  data.map(file => console.log(file))
})
