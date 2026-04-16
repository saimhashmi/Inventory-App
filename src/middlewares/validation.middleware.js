const validateRequest = (req, res, next) => {
	console.log(req.body);
	const { name, desc, price, imageURL } = req.body;
	let errors = [];

	if (!name || name.trim() == "") {
		errors.push("Name is required!");
	}

	if (!desc || desc.trim() == "") {
		errors.push("description is required!");
	}

	if (desc.trim().length < 10) {
		errors.push("description should be atleast 10 character!");
	}

	if (!price || parseFloat(price) < 1) {
		errors.push("Price must be positive!");
	}

	try {
		const validUrl = new URL(imageURL);
	} catch {
		errors.push(`URL is invalid!`);
	}

	console.log(errors);

	if (errors.length > 0) {
		return res.status(400).render("new-product", {
			errorMessages: errors,
			statusCode: 400,
		});
	}

	next();
};

export default validateRequest;
