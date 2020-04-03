import { auth } from '../../actions';
import store from '../../store/';

const errorHandler = error => {
	console.log(error.response);
};

const responseHandler = res => {
	console.log(res.data);
	return res.data;
};

const unAuthorizedHandler = async () => {
	const { logout } = auth;
	store.dispatch(logout());
};

export { errorHandler, responseHandler, unAuthorizedHandler };
