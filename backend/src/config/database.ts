import { connect, set } from 'mongoose'

// connection to db
export const connectToDB = async (MONGO_DB_URI?: string) => {
	if (!MONGO_DB_URI) throw new Error('MONGO_DB_URI is not set')
	console.log('[DATABASE] connecting to ', MONGO_DB_URI)
	try {
		set('strictQuery', false)
		const db = await connect(MONGO_DB_URI)

		console.log('MongoDB connected to', db.connection.name)
		// Emit an event when the connection is successful
	} catch (error) {
		console.error(error)
		throw new Error('Failed to connect to MongoDB')
	}
}
