const express = require('express')
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')
const app = express()
const port = 3000

app.use(cors())

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})