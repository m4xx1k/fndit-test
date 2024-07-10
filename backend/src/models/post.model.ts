import { Schema, model } from 'mongoose'

export interface Post {
	title: string
	guid: string
	pubDate: string
	description: string
	thumbnail: string
	encoded: string
	link: string
	creator: string
	category: string
}
const required = true
const schema = new Schema({
	title: {
		type: String,
		required,
	},
	guid: {
		type: String,
		required,
	},
	pubDate: {
		type: String,
		required,
	},
	pubDateMs: {
		type: Number,
		required,
	},
	description: {
		type: String,
		required,
	},
	thumbnail: {
		type: String,
		required,
	},
	encoded: {
		type: String,
		required,
	},
	link: {
		type: String,
		required,
	},
	creator: {
		type: String,
		required,
	},
	category: {
		type: String,
		required,
	},
})
export const PostModel = model<Post>('Post', schema)
