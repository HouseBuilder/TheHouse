const express = require('express')
const path = require('path')

const app = express()

let PORT = process.env.PORT || 3000

let listener = app.listen(PORT, () => {
  console.log('Server is now listening on:', listener.address().port)
})
