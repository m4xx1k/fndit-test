import { PostModel } from '../models/post.model'
import { Item } from '../types'

export async function createPost(item: Item) {
	try {
		const creator = Array.isArray(item['dc:creator'])
			? item['dc:creator'].join(', ')
			: item['dc:creator']
		const dataToCreate = {
			...item,
			encoded: item['content:encoded'],
			thumbnail: item['media:thumbnail']['@_url'],
			guid: item.guid['#text'],
			creator: creator,
			pubDateMs: Date.parse(item.pubDate),
		}

		const post = await PostModel.create(dataToCreate)
		return post
	} catch (error) {
		throw new Error(error?.message || 'Failed to create post')
	}
}
export async function getPosts({ page }: { page: number }) {
	try {
		const pageSize = 10
		const posts = await PostModel.find({})
			.skip((page - 1) * pageSize)
			.limit(pageSize)
			.sort({ pubDateMs: -1 })
			.lean()
		const totalPosts = await PostModel.countDocuments({})
		const hasMore = page * pageSize < totalPosts
		return { posts, hasMore }
	} catch (error) {
		console.log(error?.message || 'Failed to fetch posts')
		throw new Error(error?.message || 'Failed to fetch posts')
	}
}
