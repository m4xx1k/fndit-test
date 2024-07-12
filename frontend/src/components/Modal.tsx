import { ReactNode, useState } from 'react'

const Modal = ({
	title,
	content,
	onAccept = () => {},
	onDecline = () => {},
}: {
	title: string
	content: ReactNode
	onAccept?: () => void
	onDecline?: () => void
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<button
				onClick={toggleModal}
				className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				type='button'
			>
				Toggle modal
			</button>

			{isOpen && (
				<div
					id='default-modal'
					tabIndex={-1}
					aria-hidden='true'
					className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black/80 bg-opacity-50'
				>
					<div className='relative p-4 w-full max-w-2xl'>
						<div className='relative bg-white rounded-lg shadow'>
							<div className='flex items-center justify-between p-4 border-b rounded-t'>
								<h3 className='text-xl font-semibold text-black'>{title}</h3>
								<button
									onClick={toggleModal}
									type='button'
									className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
								>
									<svg
										className='w-3 h-3'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 14 14'
									>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
										/>
									</svg>
									<span className='sr-only'>Close modal</span>
								</button>
							</div>
							<div className='p-4 space-y-4 text-black'>{content}</div>
							<div className='flex items-center p-4 border-t border-gray-200 rounded-b'>
								<button
									onClick={() => {
										onAccept()
										toggleModal()
									}}
									type='button'
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
								>
									I accept
								</button>
								<button
									onClick={() => {
										onDecline()
										toggleModal()
									}}
									type='button'
									className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100'
								>
									Decline
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
