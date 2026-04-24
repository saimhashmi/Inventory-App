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
		console.log(`User ${email} signed up`);
		return res
			.status(201)
			.render("login", { userEmail: req.session.userEmail });
	}

	postLogin(req, res) {
		const { email, password } = req.body;
		const user = UserModel.get().find(
			(user) => user.email === email && user.password === password,
		);
		if (!user) {
			return res.status(401).render("login", {
				errorMessages: "Invalid email or password",
				statusCode: 401,
			});
		}

		req.session.userEmail = email;
		console.log(`User ${email} logged in`);
		return res
			.status(201)
			.render("home", { user: user, userEmail: req.session.userEmail });
	}

	logout(req, res) {
		// On logout destroy the session
		const email = req.session.userEmail;
		req.session.destroy((err) => {
			if (err) {
				console.log("unable to logout:", err);
			} else {
				console.log(`user ${user} logged out`);
				res.redirect("/login");
			}
		});
	}
}
