import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonComponent } from '../../common/ui/button-component';

const ControlContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: inline-block;
	position: relative;
	height: 48px;
`;

const ControlButton = styled.div`
	position: absolute;
	bottom: 8px;

	${props =>
		props.isNext &&
		css`
			right: 0;
		`}
	${props =>
		props.isBack &&
		css`
			left: 0;
		`}
`;
const ControlComponent = ({ pages = 1, callback }) => {
	const [state, setState] = React.useState({
		currentPage: 0,
		maxLength: pages.length
	});

	const handlePrev = () => {
		if (state.currentPage < 1) {
			return;
		}
		setState(state => ({ ...state, currentPage: state.currentPage - 1 }));
		callback(state.currentPage);
	};
	const handleNext = () => {
		if (state.currentPage > state.maxLength - 1) {
			return;
		}
		setState(state => ({ ...state, currentPage: state.currentPage + 1 }));
		callback(state.currentPage);
	};
	return (
		<ControlContainer>
			{state.currentPage > 0 && (
				<ControlButton isBack>
					<ButtonComponent onClick={handlePrev}>Prev</ButtonComponent>
				</ControlButton>
			)}
			{state.currentPage < state.maxLength - 1 && (
				<ControlButton isNext>
					<ButtonComponent onClick={handleNext}>Next</ButtonComponent>
				</ControlButton>
			)}
		</ControlContainer>
	);
};
export { ControlComponent };
