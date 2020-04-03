import React from 'react';
import styled from 'styled-components';
import { RatingComponent } from '../components/rating-component';

const Container = styled.div`
	padding: 16px;
	background: white;
	margin-top: 24px;
	border-radius: 7px;
	h2 {
		color: #3a4453;
	}
	p {
		color: #3a4453;
	}
`;

const ScoreContainer = styled.div`
	position: relative;
	height: 32px;
	width: 100%;
	border-radius: 7px;
	background: #566df5;
	display: flex;
	align-items: center;
	justify-content: center;
	span.title {
		font-weight: 600;
	}
	span {
		color: white;
		font-size: 12px;
		padding-left: 8px;
		font-family: Roboto;
	}
`;

const ScoreKeeper = ({ score }) => (
	<ScoreContainer>
		<span className="title">Score:</span>
		<span>{score}</span>
	</ScoreContainer>
);

const AssessmentContainer = ({ children }) => {
	const [state, setState] = React.useState({
		score: [0, 4],
		points: 0
	});

	const incrementRating = value => {
		setState(state => ({ ...state, score: [...state.score, value] }));
	};

	console.log(state.score);
	return (
		<Container>
			<ScoreKeeper score={state.points} />
			<h2>Step 1</h2>
			<RatingComponent callback={incrementRating} />
		</Container>
	);
};
export { AssessmentContainer };
