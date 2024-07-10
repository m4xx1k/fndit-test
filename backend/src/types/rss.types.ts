export interface RSSResponse {
	rss: Rss
}

export interface Rss {
	channel: Channel
}

export interface Channel {
	title: string
	link: string[]
	description: string
	pubDate: string
	language: string
	lastBuildDate: string
	copyright: string
	ttl: number
	updatePeriod: string
	updateFrequency: number
	item: Item[]
}

export interface Item {
	title: string
	guid: Guid
	pubDate: string
	'media:thumbnail': MediaThumbnail
	'content:encoded': string
	'dc:creator': string | string[]
	category: string
}
export interface Guid {
	'#text': string
	'@_isPermaLink': string
}

export interface MediaThumbnail {
	'@_url': string
}

export interface Encoded {
	__cdata: string
}

export interface Category {
	__cdata: string
}
