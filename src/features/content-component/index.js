import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding: 20px;
	background: white;
	border-radius: 7px;
	margin-top: 24px;
	margin-bottom: 24px;
	margin-left: auto;
	margin-right: auto;
	h1 {
		font-size: 32px;
		color: #3a4453;
		font-family: Roboto;
		line-height: 40px;
	}
	p {
		font-size: 14px;
		color: #3a4453;
		font-family: Roboto;
		line-height: 24px;
		margin-top: 16px;
	}
`;

const Group = styled.div``;

const ContentComponent = ({ children, currentPage }) => {
	if (!currentPage) {
		return <div />;
	}

	const renderContents = items => {
		if (!items) {
			return <div />;
		}
		return (
			<React.Fragment>
				{items.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</React.Fragment>
		);
	};

	return (
		<ContentContainer>
			<Group>
				<h1>{currentPage.title}</h1>
				{renderContents(currentPage.contents)}
			</Group>
			{children}
		</ContentContainer>
	);
};
export { ContentComponent };
