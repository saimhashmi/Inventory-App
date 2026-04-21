import multer from "multer";

const storageConfig = multer.diskStorage({
	destination: "./assets/images",
	filename: (req, file, callback) => {
		const name = Date.now() + "-" + file.originalname;
		callback(null, name);
	},
});

export const uploadFile = multer({ storage: storageConfig });
