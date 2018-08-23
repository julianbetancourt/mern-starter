import express from 'express'

const app = express()

app.get('/boom', (req, res) => {
  res.json({ message: 'This comes from your express server!' })
})

app.listen(3005, () => console.log('listening in port 3005'))
