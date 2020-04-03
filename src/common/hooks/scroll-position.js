import React from 'react';

const useScrollPosition = () => {
	const [scrollPos, setScrollPos] = React.useState(window.pageYOffset);

	// On Scroll
	const onScroll = () => {
		setScrollPos(window.pageYOffset);
	};

	// Add and remove the window listener
	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	return scrollPos;
};

export { useScrollPosition };
