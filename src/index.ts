import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
app.use(express.json())
databaseService.connect().catch(console.dir)
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World !!')
})

app.use('/users', usersRouter) // middleware
app.listen(PORT, () => {
  console.log(`Server đang chạy ở port ${PORT}`)
})
