const express = require('express');
const server = express()

const portfolioRoutes = require('./routes/portfolio')

server.get('/', (req, res) => {
    return res.json({ message: 'Je test' })
})

server.use('/api/v1/portfolio', portfolioRoutes)


const PORT = parseInt(process.env.PORT, 10) || 3001
server.listen(PORT, (err) => {
    if (err) console.error(err)
    console.log(`Server ready on port ${PORT}`)
})
