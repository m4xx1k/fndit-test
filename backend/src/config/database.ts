import { connect, set } from 'mongoose'

// connection to db
export const connectToDB = async (MONGO_DB_URI?: string) => {
	if (!MONGO_DB_URI) throw new Error('MONGO_DB_URI is not set')
	try {
		set('strictQuery', false)
		const db = await connect('mongodb://localhost:27017/fndit')

		console.log('MongoDB connected to', db.connection.name)
		// Emit an event when the connection is successful
	} catch (error) {
		console.error(error)
		throw new Error('Failed to connect to MongoDB')
	}
}
