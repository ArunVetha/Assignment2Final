class GitHub {
	constructor() {
		this.client_id = 'Iv1.614f90a7b313d789';
		this.client_secret = '44ac3f7d3c835516c50b7d2fbd6cbedaed1e5182';
	}
	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}