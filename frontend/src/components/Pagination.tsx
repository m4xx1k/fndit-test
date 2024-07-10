type Props = {
	onPageChange: React.Dispatch<React.SetStateAction<number>>

	page: number
	hasMore?: boolean
	isPreviousData?: boolean
	isFetching?: boolean
}
const Pagination = ({ onPageChange, page, hasMore, isFetching }: Props) => {
	console.log({ isFetching, hasMore })
	return (
		<section className='mx-auto w-10/12 flex justify-evenly gap-4 mt-4 p-4 rounded-t-xl bg-slate-200 shadow'>
			<button
				onClick={() => onPageChange(old => old - 1)}
				disabled={page === 1}
				className='cursor-pointer hover:scale-110 transform duration-200 bg-green-600 text-slate-800 font-semibold text-lg rounded-lg px-8 py-4'
			>
				Previous Page
			</button>
			<button
				onClick={() => onPageChange(old => (hasMore ? old + 1 : old))}
				disabled={isFetching || !hasMore}
				className='cursor-pointer hover:scale-110 transform duration-200 bg-green-600 text-slate-800 font-semibold text-lg rounded-lg px-8 py-4'
			>
				Next Page
			</button>
		</section>
	)
}

export default Pagination
