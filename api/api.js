const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.send('Hello from backend!')
})

app.get('/api/someRoute', (req, res) => {
    res.send('Hello from someroute in backend!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})