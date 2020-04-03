/**
 * @description try-catch wrapper
 * @method catcher
 * @param fn - function to be wrapped
 * @param errorHandler - error handler
 * @returns {Function} function try-catch runner
 */
const catcher = (fn, errorHandler, unAuthorizedHandler) => {
	const runner = async (...args) => {
		let result;
		try {
			result = await fn(...args);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				await unAuthorizedHandler(error);
			} else {
				if (errorHandler) {
					await errorHandler(error);
				} else {
					return error;
				}
			}
		}
		return result;
	};
	return runner;
};

export default catcher;
