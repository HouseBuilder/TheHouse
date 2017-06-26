const express = require('express')
const path = require('path')

const app = express()

let PORT = process.env.PORT || 3000

// static files
app.use(express.static(path.join(__dirname, './../public')))

let listener = app.listen(PORT, () => {
  console.log('Server is now listening on:', listener.address().port)
})
