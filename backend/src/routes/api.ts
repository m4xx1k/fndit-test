import { Router } from 'express'
import PostRouter from './post.route'
const ApiRouter = Router()
ApiRouter.use('/posts', PostRouter)
export default ApiRouter
