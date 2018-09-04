export default (validators) => async (req, res, next) => {
    const validationErrors = []
	const results = validators.map((validator) => {
		const res = validator(req);
		return res;
	});

	const errorResults = results.forEach(result => {
		if (result) {
			validationErrors.push({ message: result.message, field: result.field });
		}
	})


	next()
}
