import React from 'react';
import * as icons from './list';
import propTypes from './propTypes';
import { Svg } from './styledComponents';

const Icon = ({
	name,
	size = 24,
	rotate,
	fill = 'default',
	stroke = 'default',
	viewBox = `0 0 20 20`,
	...props
}) => {
	const matchedIcon = Object.keys(icons).includes(name);

	if (!matchedIcon) {
		console.log(
			`%cUnknown Icon: ${name}`,
			'color: orange; line-height: 19px; font-size: 12px; white-space: nowrap; display: inline;'
		);
		return <></>;
	}

	const Path = icons[name];
	const normalizedFill = fill === 'default' ? undefined : fill;
	const normalizedStroke = stroke === 'default' ? undefined : stroke;
	return (
		<Svg
			className={`icon-svg ${name.toLowerCase()}`}
			width={size}
			height={size}
			rotate={rotate}
			viewBox={viewBox}
			{...props}
		>
			<Path fill={normalizedFill} stroke={normalizedStroke} />
		</Svg>
	);
};

Icon.propTypes = propTypes;

export default Icon;
