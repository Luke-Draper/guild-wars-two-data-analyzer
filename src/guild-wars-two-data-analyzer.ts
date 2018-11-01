const axios = require('axios')
export default class DummyClass {
	getBreeds = () => {
		try {
			return axios.get('https://dog.ceo/api/breeds/list/all')
		} catch (error) {
			console.error(error)
		}
	}

	countBreeds = async () => {
		let output = ''
		const breeds = this.getBreeds()
			.then((response: any) => {
				if (response.data.message) {
					console.log(Object.entries(response.data.message).length.toString())
					output = Object.entries(response.data.message).length.toString()
				}
			})
			.catch((error: any) => {
				console.log(error)
			})
			.then(() => {
				return output.toString()
			})
	}
}
const dummy = new DummyClass()
dummy.countBreeds()
