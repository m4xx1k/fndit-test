import { Request, Response } from 'express'
import { ErrorCode } from '../errors'
import InternalServerError from '../errors/internal'
import * as RSSParser from '../services/rssParser.service'
export const parseRssController = async (req: Request, res: Response) => {
	try {
		await RSSParser.parseRss()
		res.status(200).json({ success: true })
	} catch (error) {
		throw new InternalServerError(
			'Failed to fetch posts',
			ErrorCode.INTERNAL_SERVER
		)
	}
}
