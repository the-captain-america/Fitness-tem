/* Retrieve layout from local storage. */
export const getFromLS = key =>
	global.localStorage && JSON.parse(global.localStorage.getItem(key));

/* Save layout to local storage. */
export const saveToLS = (key, value) =>
	global.localStorage &&
	global.localStorage.setItem(key, JSON.stringify(value));

export const getCookie = name => {
	var dc, prefix, begin, end;

	dc = document.cookie;
	prefix = name + '=';
	begin = dc.indexOf('; ' + prefix);
	end = dc.length; // default to end of the string

	// found, and not in first position
	if (begin !== -1) {
		// exclude the "; "
		begin += 2;
	} else {
		//see if cookie is in first position
		begin = dc.indexOf(prefix);
		// not found at all or found as a portion of another cookie name
		if (begin === -1 || begin !== 0) return null;
	}

	// if we find a ";" somewhere after the prefix position then "end" is that position,
	// otherwise it defaults to the end of the string
	if (dc.indexOf(';', begin) !== -1) {
		end = dc.indexOf(';', begin);
	}

	return decodeURI(dc.substring(begin + prefix.length, end)).replace(/"/g, '');
};

/*
 * Sets a cookies.
 * @param name cookie name
 * @param value cookie value
 * @param path cookie path
 * @param expires cookie validity
 */
export const setCookie = (name, value, path, expires) => {
	document.cookie = `${name}=${value}; Path=${path}; expires=${expires}`;
};

/*
 * Removes cookie from the browser. Please note, it does not remove httponly cookie.
 * @param name cookie to be removed
 * @path path path of the cookie
 */
export const removeCookie = (name, path = '/') => {
	setCookie(name, null, path, 'Thu, 01 Jan 1970 00:00:00 GMT');
};
