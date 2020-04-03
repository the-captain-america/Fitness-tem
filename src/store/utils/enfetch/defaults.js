import { errorHandler, responseHandler, unAuthorizedHandler } from './handlers';

const defaults = {
	headers: {
		'content-type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
		'if-none-match': null
	},
	method: 'GET',
	errorHandler,
	responseHandler,
	unAuthorizedHandler
};

export default defaults;
