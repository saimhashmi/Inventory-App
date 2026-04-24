export default class appController {
	getHome(req, res) {
		const email = req.session.userEmail;
		console.log(`user ${email} opened home page`);

		return res.render("home", { userEmail: req.session.userEmail });
	}
}
