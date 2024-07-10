import { useState } from 'react'
import { useQuery } from 'react-query'
import Pagination from './Pagination'
import Post from './Post'
type FetchPostResponse = {
	hasMore: boolean
	posts: Record<string, string>[]
}
const baseUrl = import.meta.env.VITE_API_URL
async function fetchPosts(page = 1): Promise<FetchPostResponse> {
	const res = await fetch(`${baseUrl}?page=` + page)
	const data = (await res.json()) as FetchPostResponse
	console.log(data)
	return data
}
const POST_API_KEY = 'posts'
const Feed = () => {
	const [page, setPage] = useState<number>(1)
	const { status, data, isFetching } = useQuery({
		queryKey: [POST_API_KEY, page],
		queryFn: () => fetchPosts(page),
		keepPreviousData: true,
		staleTime: 5000,
	})

	return (
		<div className='flex flex-col grow'>
			{status === 'loading' ? (
				<div>Loading...</div>
			) : status === 'error' ? (
				<div>Error</div>
			) : (
				<ul className='flex flex-wrap justify-center gap-4 grow'>
					{data?.posts.map(post => (
						<Post post={post} key={post._id} />
					))}
				</ul>
			)}
			<Pagination
				onPageChange={setPage}
				page={page}
				hasMore={data?.hasMore}
				isFetching={isFetching}
			/>
		</div>
	)
}

export default Feed
