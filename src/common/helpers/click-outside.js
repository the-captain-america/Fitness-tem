import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter({ ref, callback }) {
	/**
	 * Alert if clicked on outside of element
	 */
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			callback();
		}
	}

	useEffect(() => {
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
}

/**
 * Component that alerts if you click outside of it
 */
export default function ClickOutside(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter({ ref: wrapperRef, callback: props.callback });

	return <div ref={wrapperRef}>{props.children}</div>;
}
