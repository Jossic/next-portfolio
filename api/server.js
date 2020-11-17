const express = require('express');
const server = express()

server.get('/', (req, res) => {
    return res.json({ message: 'Je test' })
})

const PORT = parseInt(process.env.PORT, 10) || 3001
server.listen(PORT, (err) => {
    if (err) console.error(err)
    console.log(`Server ready on port ${PORT}`)
})
