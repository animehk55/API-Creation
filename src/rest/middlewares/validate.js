export default (validators) => async (req, res, next) => {
    const validationErrors = []
	const results = validators.map((validator) => {
		const res = validator(req);
		return res;
	});

