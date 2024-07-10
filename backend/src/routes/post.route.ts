import { Router } from 'express'
import { parseRssController } from '../controllers/feed.controller'
import { getPosts } from '../controllers/post.controller'
const postRouter = Router()
postRouter.get('/', getPosts)
postRouter.get('/parse', parseRssController)
export default postRouter
