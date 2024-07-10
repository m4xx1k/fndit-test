import { PostModel } from '../models/post.model'
import { RSSResponse } from '../types/rss.types'
import parser from '../utils/xmlParser'
import { createPost } from './post.service'
const RSS_URL = 'https://lifehacker.com/feed/rss'
export async function parseRss() {
	try {
		const feedResponse = await fetch(RSS_URL)
		const feedXmlData = await feedResponse.text()
		const feedJsonData = parser.parse(feedXmlData) as RSSResponse | null
		if (!feedJsonData?.rss) throw new Error('Failed to parse RSS feed')
		console.log(`[JOB] START PARSING ${RSS_URL}`)
		const lastSavedPost = await PostModel.findOne({})
			.select({
				pubDate: 1,
			})
			.sort({ pubDate: -1 })

		const lastSavedPostDate = lastSavedPost
			? Date.parse(lastSavedPost.pubDate)
			: 0
		let posts = []
		if (lastSavedPostDate === 0) {
			posts = feedJsonData.rss.channel.item
		} else {
			const lastNewPostIndex = feedJsonData.rss.channel.item.findIndex(
				item => Date.parse(item.pubDate) <= lastSavedPostDate
			)
			const lastSavedPostDateString = new Date(
				lastSavedPostDate
			).toLocaleString()
			console.log('Last New Post Date', lastSavedPostDateString)
			if (lastNewPostIndex === -1) return
			posts = feedJsonData.rss.channel.item.slice(0, lastNewPostIndex)
			console.log(`Find new ${posts.length} posts`)
		}

		for (let i = 0; i < posts.length; i++) {
			const item = feedJsonData.rss.channel.item[i]
			await createPost(item)
			const normalizedName =
				item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title

			const currentTime = new Date(item.pubDate).toLocaleTimeString()
			console.log(`[PARSED] [${currentTime}] ${normalizedName}`)
		}
	} catch (e) {
		console.log(e)
		throw new Error(e?.message || 'Failed to parse RSS feed')
	}
}
