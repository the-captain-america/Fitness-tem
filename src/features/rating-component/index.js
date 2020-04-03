import React from 'react';
import styled, { css } from 'styled-components';

const RatingContainer = styled.div`
	position: relative;
	padding: 0;
	border-radius: 7px;
	border: none;
	margin-top: 24px;
	margin-bottom: 8px;
	width: 100%;
	h2 {
		margin: 0;
		margin-bottom: 16px;
		color: black;
		font-weight: 600;
	}
`;

const RatingGroup = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: flex-start;
	align-items: flex-start;
`;

const RatingItem = styled.li`
	list-style: none;
	display: flex;
	padding: 6px;
	background: #566df5;
	margin-left: 8px;
	margin-top: 8px;
	border-radius: 7px;
	&:first-child {
		margin-left: 0;
	}
	span {
		color: white;
		font-size: 12px;
		text-align: center;
	}
	${props =>
		props.isActive &&
		css`
			background: orange;
		`}
`;

const answers = [
	{ uid: 'wxi23', title: 'Strongly Disagree', value: 0 },
	{ uid: 'wxils', title: 'Disagree', value: 1 },
	{ uid: 'wxi80', title: 'Neutral', value: 2 },
	{ uid: 'wxi10', title: 'Agree', value: 3 },
	{ uid: 'wxi44', title: 'Strongly Agree', value: 4 }
];

const RatingComponent = ({ callback }) => {
	const [state, setState] = React.useState({
		selectedId: -1
	});

	const handleResult = item => {
		setState(state => ({ ...state, selectedId: item.uid }));
		callback(item.value);
	};

	const renderItems = () => {
		if (!answers) {
			return <div />;
		}
		return (
			<RatingGroup>
				{answers.map((item, index) => (
					<RatingItem
						key={index}
						isActive={state.selectedId === item.uid}
						onClick={() => handleResult(item)}
					>
						<span>{item.title}</span>
					</RatingItem>
				))}
			</RatingGroup>
		);
	};

	return <RatingContainer>{renderItems()}</RatingContainer>;
};

export { RatingComponent };
