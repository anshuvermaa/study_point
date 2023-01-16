import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import path from 'path'



import cutOffRoute from './routes/cutOffRoute.js'
import collegeRoute from './routes/collegeRoute.js'


dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())


app.use('/api/cutOff',cutOffRoute)
app.use('/api/get',collegeRoute)


app.use(cors())
console.log("hi")
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/frontend/build/images')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


const PORT = process.env.PORT || 8000

app.listen(
  PORT,
  console.log(
    `Server running in mode on port ${PORT}`
  )
)

