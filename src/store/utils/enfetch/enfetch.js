import axios from 'axios';
import defaults from './defaults';
import catcher from '../catcher';

/**
 * @description async request util
 * @method enfetch
 * @param args.url,
 * @param args.data,
 * @param args.method request method (defaults to defaults.method),
 * @param args.headers request headers (defaults to defaults.headers),
 * @param args.errorHandler error response handler (defaults to defaults.errorHandler),
 * @param args.responseHandler success response handler (defaults to defaults.responseHandler),
 * @returns {response|undefined} response from the server, undefined if an error response was received
 */
const enfetch = async args => {
	const {
		url,
		data,
		method = defaults.method,
		headers = defaults.headers,
		errorHandler = defaults.errorHandler,
		responseHandler = defaults.responseHandler,
		unAuthorizedHandler = defaults.unAuthorizedHandler
	} = args;
	const params = { method, headers, data };
	const safeAxios = catcher(axios, errorHandler, unAuthorizedHandler);
	const response = await safeAxios(url, params);
	if (response) {
		console.log(response);
		return responseHandler(response);
	}
};

export default enfetch;
