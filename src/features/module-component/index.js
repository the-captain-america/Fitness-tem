import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../../common/icon';
import modules from './data';

const ModuleContainer = styled.div``;

const ModuleBackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
`;

const ModuleContent = styled.div`
	padding: 16px;
	background: white;
	border-radius: 7px;
	z-index: 200;
	top: -40px;
	display: flex;
	flex-direction: column;
	width: calc(100% - 24px);
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 999;
	position: absolute;
	overflow: hidden;
`;

const ModuleHeader = styled.div`
	display: block;
	width: 100%;
	position: relative;
	margin-bottom: 16px;
	h2 {
		margin: 0;
		color: #3a4453;
	}
`;

const ModuleClosePosition = styled.div`
	left: 50%;
	top: 16px;
	transform: translate(-50%, 0);
	position: absolute;
`;

const ModuleClose = styled.button`
	border: none;
	background: white;
	display: flex;
	justify-content: center;
	padding: 4px 10px;
	border-radius: 9px;
	background: #405ce8;
	box-shadow: 0px 0px 17px -1px rgba(25, 24, 48, 0.32);
	transition: all 0.3s ease-in-out;
	${props =>
		props.grow &&
		css`
			transform: scale(1);
			&:hover {
				transform: scale(1.2);
			}
		`}

	span {
		color: white;
		font-size: 14px;
		padding-top: 2px;
	}
	&:hover {
		cursor: pointer;

		svg {
			path {
				stroke: black;
			}
		}
	}
	svg {
		position: relative;
		left: 2px;
		path {
			stroke: white;
		}
	}
`;

const ModuleBanner = styled.div`
	width: 100%;
	padding: 8px;
	color: white;
	font-weight: 600;
	border-radius: 9px;
	margin-bottom: 8px;
	${props =>
		props.color &&
		css`
			background: ${props.color};
		`}
`;

const ModuleGroup = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ModuleItem = styled.li`
	list-style: none;
	margin: 0;
	padding: 0;
	border: 1px solid white;
	border-radius: 7px;
	margin-top: 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const ModuleItemContent = styled.div`
	width: 100%;
	padding: 8px;
	background: white;
	font-weight: 600;
	span {
		color: #313131;
		font-weight: 400;
	}
`;

const ModuleComponent = ({ handleClose, ...props }) => {
	const renderModuleContent = contents => {
		if (!contents) {
			return <div />;
		}
		return (
			<React.Fragment>
				{contents.map((item, index) => (
					<ModuleItemContent key={index}>
						{`${item.key}: `}
						<span>{item.value}</span>
					</ModuleItemContent>
				))}
			</React.Fragment>
		);
	};
	const renderModules = () => {
		if (!modules) {
			return <div />;
		}
		return (
			<ModuleGroup>
				{modules.map((item, index) => (
					<ModuleItem key={index}>
						<ModuleBanner color={item.color}>{item.title}</ModuleBanner>
						{renderModuleContent(item.content)}
					</ModuleItem>
				))}
			</ModuleGroup>
		);
	};
	return (
		<React.Fragment>
			<ModuleContainer>
				{props.isActive && (
					<ModuleContent>
						<ModuleClosePosition>
							<ModuleClose grow onClick={handleClose}>
								<Icon name="CLOSE" size={24} />
								<span>Close</span>
							</ModuleClose>
						</ModuleClosePosition>

						{renderModules()}
						<ModuleClose onClick={handleClose}>
							<Icon name="CLOSE" size={24} />
							<span>Close</span>
						</ModuleClose>
					</ModuleContent>
				)}
			</ModuleContainer>
			{props.isActive && <ModuleBackDrop onClick={handleClose} />}
		</React.Fragment>
	);
};

export { ModuleComponent };
