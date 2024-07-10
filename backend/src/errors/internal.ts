import CustomAPIError, { ErrorCode } from './api.error'

class InternalServerError extends CustomAPIError {
	statusCode: number
	constructor(message: string, errorCode: ErrorCode) {
		super(message, errorCode, 500, null)
		this.statusCode = 500
	}
}

export default InternalServerError
