import { useState } from 'react'
import { useQuery } from 'react-query'
import { IPost } from './types'
const POST_API_KEY = 'posts'
const BASE_URL = 'http://localhost:5000/api/'

export function useFetchFeed() {
	const [page, setPage] = useState<number>(1)
	const query = useQuery({
		queryKey: [POST_API_KEY, page],
		queryFn: () => fetchPosts(page),
		keepPreviousData: true,
		staleTime: 5000,
	})
	return {
		page,
		setPage,
		...query,
	}
}
async function fetchPosts(page = 1): Promise<FetchPostResponse> {
	const url = BASE_URL + `?page=${page}`
	const res = await fetch(url)
	if (!res.ok) {
		console.log(res.statusText, res.status)
		console.log(await res.text())
	}
	const data = (await res.json()) as FetchPostResponse
	console.log(data)
	return data
}
type FetchPostResponse = {
	hasMore: boolean
	posts: IPost[]
}
