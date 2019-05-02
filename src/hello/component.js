module.exports = class {
	onCreate() {
		this.state = { users: [] }

		fetch(`//jsonplaceholder.typicode.com/users`)
			.then(res => res.json())
			.then(users => (this.state.users = users))
	}
}
