export default class UserModel {
	constructor(_id, _name, _email, _password) {
		this.id = _id;
		this.name = _name;
		this.email = _email;
		this.password = _password;
	}

	static get() {
		return users;
	}

	static add(name, email, password) {
		const newUser = new UserModel(users.length + 1, name, email, password);
		users.push(newUser);
		console.log(users);
	}
}

let users = [];
