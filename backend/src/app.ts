import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectToDB } from './config/database' // Import the mongoose configuration file
import { parseRssJob } from './jobs/rss.job'
import { errorHandler, notFound } from './middlewares/error.middleware'
import postRouter from './routes/post.route'
dotenv.config({ path: './.env' })

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(
	cors({
		origin: '*',
	})
)
app.use(errorHandler)
app.use('/api', postRouter)
app.use(notFound)

connectToDB(process.env.MONGO_DB_URI).then(() => {
	parseRssJob.start()
})

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`)
})
