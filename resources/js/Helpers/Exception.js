import User from './User'
class Exception{
	handle(error)
	{
		this.isExpired(error.response.data.error)
	}
	isExpired(error){
		if (error == 'Token is expired') {
			User.logout()
		}
		if (error == 'Token is invalid') {
			User.logout()
		}

	}
}
export default Exception = new Exception()