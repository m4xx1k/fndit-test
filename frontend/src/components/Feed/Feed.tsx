import Pagination from './Pagination'
import PostCard from './PostCard'
import { useFetchFeed } from './useFetchFeed'

export const Feed = () => {
	const { status, data, setPage, page, isFetching } = useFetchFeed()
	return (
		<div className='flex flex-col grow'>
			{status === 'loading' ? (
				<div>Loading...</div>
			) : status === 'error' ? (
				<div>Error</div>
			) : (
				<ul className='flex flex-wrap justify-center gap-4 grow'>
					{data?.posts.map(post => (
						<PostCard post={post} key={post._id} />
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
