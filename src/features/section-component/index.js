import React from 'react';
import styled, { css } from 'styled-components';

const Content = styled.div`
	border-radius: 7px;
	background: white;
	padding: 16px 32px 32px 16px;
	color: #3a4453;
	line-height: 24px;
	font-size: 14px;
	box-shadow: 0px 0px 13px 2px rgba(34, 36, 66, 0.3);
`;

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	position: relative;
`;

const CurvedTriangle = styled.div`
	position: absolute;
	left: 50%;
	/* z-index: -1; */
	transform: translate(-50%, -50%);
	${props =>
		props.rotate &&
		css`
			transform: rotate(${props.rotate}deg);
		`}
	bottom: -10px;
	.triangle {
		position: relative;
		background-color: ${props => (props.color ? props.color : 'orange')};
		text-align: left;
	}
	.triangle:before,
	.triangle:after {
		content: '';
		position: absolute;
		background-color: inherit;
	}
	.triangle,
	.triangle:before,
	.triangle:after {
		width: ${props => (props.size ? props.size : 10)}px;
		height: ${props => (props.size ? props.size : 10)}px;
		border-top-right-radius: 30%;
	}

	.triangle {
		transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
	}
	.triangle:before {
		transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
			translate(0, -50%);
	}
	.triangle:after {
		transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
	}
`;

const SectionHeading = styled.h2`
	margin-bottom: 8px;
	font-family: Roboto;
	font-weight: 600;
	color: #3a4453;
`;

export const SectionComponent = ({ title, children }) => (
	<Container>
		<Content>
			<SectionHeading>{title ? title : 'Heading'}</SectionHeading>
			{children ? children : 'Contents'}
			<CurvedTriangle color="white" rotate={180}>
				<div className="triangle" />
			</CurvedTriangle>
		</Content>
	</Container>
);
