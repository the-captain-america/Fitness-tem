const findArrayByObjectKey = () => {};

const isObjectEmpty = object => Object.keys(object).length === 0;

const pruneObj = (object, hard) =>
	Object.keys(object).reduce((withValue, key) => {
		if (
			(typeof object[key] !== 'object' && object[key]) ||
			Array.isArray(object[key])
		) {
			if (hard && !object[key].length) {
				return {
					...withValue
				};
			}
			return {
				...withValue,
				[key]: object[key]
			};
		}
		if (typeof object[key] === 'object') {
			const childObj = pruneObj(object[key]);
			if (!isObjectEmpty(childObj)) {
				return {
					...withValue,
					[key]: childObj
				};
			}
		}
		return {
			...withValue
		};
	}, {});

export { pruneObj, findArrayByObjectKey };
