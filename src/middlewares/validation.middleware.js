import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
	console.log(req.body);
	// Commenting manual validation
	// const { name, desc, price, imageURL } = req.body;
	// let errors = [];

	// if (!name || name.trim() == "") {
	// 	errors.push("Name is required!");
	// }

	// if (!desc || desc.trim() == "") {
	// 	errors.push("description is required!");
	// }

	// if (desc.trim().length < 10) {
	// 	errors.push("description should be atleast 10 character!");
	// }

	// if (!price || parseFloat(price) < 1) {
	// 	errors.push("Price must be positive!");
	// }

	// try {
	// 	const validUrl = new URL(imageURL);
	// } catch {
	// 	errors.push(`URL is invalid!`);
	// }

	// Using express-validator
	// 1. Setup rules for validation
	const rules = [
		body("name").notEmpty().withMessage("Name is required"),
		body("desc").notEmpty().withMessage("Description is required"),
		body("price")
			.isFloat({ gt: 0 })
			.withMessage("Price should be positive"),
		body("imageURL").isURL().withMessage("Invalid URL"),
	];

	// 2. Run those rules
	await Promise.all(rules.map((rule) => rule.run(req)));

	// 3. Check if there are any errors after runnig the rules
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		const errorsArray = errors.array();
		console.log(errorsArray);
		return res.status(400).render("new-product", {
			errorMessages: errorsArray,
			statusCode: 400,
		});
	}

	next();
};

export default validateRequest;
