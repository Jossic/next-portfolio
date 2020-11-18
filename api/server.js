import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import portfolioRoutes from './routes/projectRoute.js'

const server = express()

dotenv.config();

await connectDB();


server.get('/', (req, res) => {
    return res.json({ message: 'Je test' })
})

server.use('/api/v1/projects', portfolioRoutes)


const PORT = parseInt(process.env.PORT, 10) || 3001
server.listen(PORT, (err) => {
    if (err) console.error(err)
    console.log(`Server ready on port ${PORT}`.yellow.bold)
})
