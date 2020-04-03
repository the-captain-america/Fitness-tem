import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border-radius: 9px;
	overflow: hidden;
	width: 100%;
	height: 200px;
	margin-top: 32px;
`;
const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

const HeroComponent = ({ imageSrc }) => {
	return (
		<Container>
			<Image src={imageSrc} />
		</Container>
	);
};

export { HeroComponent };
