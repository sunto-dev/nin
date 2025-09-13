const express = require('express')
const cors = require('cors')
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

const PORT = 8888

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Express Server is running!' })
})

app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!', timestamp: new Date() })
})

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`)
})
