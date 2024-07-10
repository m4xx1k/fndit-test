import { Request, Response } from 'express'
import { ErrorCode } from '../errors'
import InternalServerError from '../errors/internal'
import * as PostService from '../services/post.service'
export const getPosts = async (req: Request, res: Response) => {
	try {
		const pageParam = req.query.page

		let page: number = parseInt(pageParam as string, 10)

		if (isNaN(page) || page <= 0) page = 1
		const posts = await PostService.getPosts({ page })

		res.status(200).json(posts)
	} catch (error) {
		throw new InternalServerError(
			'Failed to fetch posts',
			ErrorCode.INTERNAL_SERVER
		)
	}
}
