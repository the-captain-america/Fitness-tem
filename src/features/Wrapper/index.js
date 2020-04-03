import React from 'react';
import { Container } from './styledComponents';
import ControlBar from '../ControlBar';

const Wrapper = ({ children, ...props }) => {
	React.useEffect(() => {
		document.body.style.backgroundColor = '#e3eaf8';
		return () => {
			document.body.style.backgroundColor = null;
		};
	}, []);

	return (
		<Container {...props}>
			{children}
			<ControlBar />
		</Container>
	);
};

export default Wrapper;
