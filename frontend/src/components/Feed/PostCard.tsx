import { useState } from 'react'
import { IPost } from './types'

const PostCard = ({ post }: { post: IPost }) => {
	const date = new Date(post.pubDate).toLocaleString()
	const [isCollapsed, setIsCollapsed] = useState(true)
	return (
		<li className='w-10/12 lg:w-[48%] rounded-lg shadow-lg p-2 bg-slate-300 hover:bg-green-500/50 transform duration-300 h-fit'>
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
				className='block text-xl font-semibold hover:underline decoration-green-900 min-h-10'
			>
				{post.title}
			</a>

			<p
				className={[
					'post',
					isCollapsed ? 'max-h-96 overflow-y-hidden' : 'h-full',
				].join(' ')}
				dangerouslySetInnerHTML={{
					__html: post.encoded,
				}}
			/>
			<button
				onClick={() => setIsCollapsed(prev => !prev)}
				className='cursor-pointer hover:scale-110 transform duration-200 bg-green-600 text-slate-800 font-semibold rounded px-4 py-1'
			>
				{isCollapsed ? 'Show More' : 'Hide'}
			</button>
			<div className='w-full flex flex-wrap gap-2 justify-between mt-2'>
				<div className='flex gap-1 items-center justify-center'>
					<img src='/user.svg' width={16} height={16} alt='' />
					<p className='text-lg font-bold'>{post.creator}</p>
				</div>
				<div className='flex gap-1 items-center justify-center'>
					<img src='/date.svg' width={16} height={16} alt='' />
					<p className='text-lg font-semibold underline italic'>{date}</p>
				</div>
			</div>
		</li>
	)
}

export default PostCard
