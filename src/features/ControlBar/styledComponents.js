import styled, { css } from 'styled-components';

const size = {
	height: 40,
	width: 40
};

const ControlFooter = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 60px;
	width: 100%;
	background: #e3eaf8;
`;

const ControlContainer = styled.div``;

const ControlButton = styled.button`
	border: 3px solid white;
	outline: none;
	border-radius: 50%;
	width: ${size.width}px;
	height: ${size.height}px;
	border: 1px solid #e3eaf8;
	background: #c8d4e9;
	left: 50%;
	top: 10px;
	box-sizing: border-box;
	position: absolute;
	transform: translate(-50%, 0);
	transition: box-shadow 0.3s ease-in-out;
	box-shadow: -5px -3px 6px 0 rgba(255, 255, 255, 0.6);
	&:after {
		transition: box-shadow 0.3s ease-in-out;
		content: '';
		width: ${size.width}px;
		height: ${size.height}px;
		background: white;
		position: absolute;
		box-shadow: 4px 5px 6px 0 rgba(200, 212, 233, 0.6);
		left: -1px;
		top: -1px;
		border: 1px solid #e3eaf8;
		border-radius: 50%;
	}
	&:hover {
		cursor: pointer;
		&:after {
			box-shadow: 2px 2px 3px 0 rgba(200, 212, 233, 0.3);
		}
		box-shadow: -2px -1px 3px 0 rgba(255, 255, 255, 0.2);
	}
	&:focus {
		outline: none;
		border: 1px solid #e3eaf8;
	}
	span.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		color: #7578ff;
		font-size: 16px;
		z-index: 1;
		transform: translate(-50%, -50%);
	}
`;

const ControlGroup = styled.div`
	position: absolute;
	bottom: 0;
	left: -50%;
	transform: translate(-50%, 0);
`;

export { ControlFooter, ControlContainer, ControlButton, ControlGroup };
