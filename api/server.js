import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import projectRoute from './routes/projectRoute.js'
import experienceRoute from './routes/experienceRoute.js'

const server = express()

dotenv.config();

await connectDB();


server.get('/', (req, res) => {
    return res.json({ message: 'Je test' })
})

server.use('/api/v1/projects', projectRoute)
server.use('/api/v1/experiences', experienceRoute)


const PORT = parseInt(process.env.PORT, 10) || 3001
server.listen(PORT, (err) => {
    if (err) console.error(err)
    console.log(`Server ready on port ${PORT}`.yellow.bold)
})
