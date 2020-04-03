import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../common/theme';
import { Icon } from '../../common/icon';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 8px;
	height: 48px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`;

const DocumentButton = styled.button`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
	border: none;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
		background: #405ce8;
		svg {
			path {
				stroke: white;
			}
		}
	}
	svg {
		position: relative;
		top: 2px;
		left: 1px;
		path {
			stroke: #405ce8;
		}
	}
`;

const SettingsButton = styled.button`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
	border: none;
	&:hover {
		cursor: pointer;
		background: #405ce8;
		svg {
			rect {
				fill: white;
			}
		}
	}
	svg {
		position: relative;
		top: -2px;
		left: -1px;
		transform: rotate(180deg);
		rect {
			fill: #405ce8;
		}
	}
`;

const HeaderComponent = ({ title, onPressRight }) => (
	<HeaderContainer>
		<SettingsButton>
			<Icon name="DOTS" size={32} />
		</SettingsButton>
		<DocumentButton onClick={onPressRight}>
			<Icon name="DOCUMENT" size={32} />
		</DocumentButton>
	</HeaderContainer>
);

export { HeaderComponent };
