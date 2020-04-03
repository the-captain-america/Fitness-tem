import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  10% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Legend = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: fixed;
	top: 50px;
	height: 230px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	width: 40px;
	background: white;
	box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.14);
	justify-content: flex-start;
	${props =>
		props.isRight &&
		css`
			right: ${props.isRight}px;
		`}
	${props =>
		props.isLeft &&
		css`
			left: ${props.isLeft}px;
		`}
`;

const LegendGroup = styled.div`
	position: relative;
	&:hover {
		.content {
			left: 35px;
			animation: 1s ${fadeIn} ease-out;
		}
	}
`;
const LegendItem = styled.div`
	text-align: center;
	width: 24px;
	height: 24px;
	box-sizing: border-box;
	display: inline-block;
	background: grey;
	position: relative;
	transition: all 0.3s ease-in-out;
	z-index: 999;
	border-radius: 50%;
	margin-top: 8px;
	&:hover {
		background: orange;
		cursor: pointer;
	}
	${props =>
		props.isActive &&
		css`
			background: black;
		`}
	span {
		position: relative;
		top: 2px;
	}
`;

const LegendContent = styled.div`
	transition: all 0.3s ease-in-out;
	width: 200px;
	left: -240px;
	top: -3px;
	padding: 16px;
	background: orange;
	border-radius: 7px;
	position: absolute;
	&:before {
		content: ' ';
		border-style: solid;
		border-width: 6px 8px 6px 0;
		border-color: transparent orange transparent transparent;
		position: absolute;
		left: -7px;
	}
`;

// Tracking Mechanism
const LegendComponent = ({ legends = [], selected, isRight, isLeft }) => {
	if (!legends) {
		return <div />;
	}
	return (
		<Legend isRight={isRight} isLeft={isLeft}>
			{legends.map((item, index) => (
				<LegendGroup key={index}>
					<LegendItem isActive={selected === index}>
						<span>{index + 1}</span>
					</LegendItem>
					<LegendContent className="content">{item.name}</LegendContent>
				</LegendGroup>
			))}
		</Legend>
	);
};

export { LegendComponent };
