import Feed from './components/Feed'

function Header() {
	return (
		<header className='w-full h-28 bg-slate-200 flex items-center rounded-b-lg'>
			<img className='mx-auto' src='/logo.svg' width={318} height={100} />
		</header>
	)
}
function App() {
	return (
		<main className='max-w-7xl w-full mx-auto px-4 flex flex-col gap-8 min-h-screen'>
			<Header />
			<Feed />
		</main>
	)
}

export default App
