const Post = ({ post }: { post: Record<string, string> }) => {
	const date = new Date(post.pubDate).toLocaleString()
	return (
		<li className='lg:w-1/4 md:w-1/3 w-full rounded-lg shadow-lg p-2 hover:bg-green-500/50 transform duration-300'>
			<img
				loading='lazy'
				src={post.thumbnail}
				alt={post.title}
				className='w-full h-auto aspect-video object-cover rounded'
			/>
			<a
				href={post.link}
				target='_blank'
				rel='noreferrer'
				className='block text-sm font-semibold hover:underline decoration-green-900 min-h-10'
			>
				{post.title}
			</a>
			<div className='w-full flex flex-wrap gap-2 justify-between mt-2'>
				<div className='flex gap-1 items-center justify-center'>
					<img src='/user.svg' width={16} height={16} alt='' />
					<p className='text-xs font-bold'>{post.creator}</p>
				</div>
				<div className='flex gap-1 items-center justify-center'>
					<img src='/date.svg' width={16} height={16} alt='' />
					<p className='text-xs font-semibold underline italic'>{date}</p>
				</div>
			</div>
		</li>
	)
}

export default Post
