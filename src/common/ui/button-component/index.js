import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../../icon';

const ButtonContainer = styled.button`
	background: #566df5;
	border-radius: 9px;
	display: flex;
	align-items: center;
	padding-top: 4px;
	padding-bottom: 4px;
	padding-right: 8px;
	outline: none;
	border: none;
	transition: all 0.3s ease-in-out;
	justify-content: space-between;
	&:hover {
		cursor: pointer;
		background: #405ce8;
	}
`;
const ButtonIcon = styled.span`
	position: relative;
	top: 0;
	width: 28px;
	height: 28px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	background: #405ce8;
	justify-content: center;
	svg {
		position: relative;
		top: 2px;
		left: 3px;
		fill: white;
		path {
			stroke: white;
		}
	}
`;

const ButtonText = styled.span`
	color: white;
	margin-left: 8px;
	text-transform: uppercase;
`;

const ButtonComponent = ({ children }) => (
	<ButtonContainer>
		<ButtonIcon>
			<Icon name="CHEVRON_RIGHT" size={24} />
		</ButtonIcon>
		<ButtonText>{children}</ButtonText>
	</ButtonContainer>
);
export { ButtonComponent };
