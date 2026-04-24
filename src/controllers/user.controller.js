import UserModel from "../models/user.model.js";

export default class UserController {
	getLoginForm(req, res) {
		return res
			.status(201)
			.render("login", { errorMessages: null, statusCode: 201 });
	}

	getSignUpForm(req, res) {
		return res
			.status(201)
			.render("sign-up", { errorMessages: null, statusCode: 201 });
	}

	postSignUp(req, res) {
		// console.log(req.body);
		const { username, email, password } = req.body;
		UserModel.add(username, email, password);
		return res.status(201).render("login");
	}

	postLogin(req, res) {
		const { email, password } = req.body;
		const user = UserModel.get().find(
			(user) => user.email === email && user.password === password,
		);
		if (user) {
			return res.status(201).render("home", { user: user });
		} else {
			return res.status(401).render("login", {
				errorMessages: "Invalid email or password",
				statusCode: 401,
			});
		}
	}
}
