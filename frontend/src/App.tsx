import { Feed } from './components/Feed'
import { Header } from './components/Header'
function App() {
	return (
		<main className='max-w-7xl w-full mx-auto flex flex-col gap-8 min-h-screen'>
			<Header />
			<Feed />
		</main>
	)
}

export default App
