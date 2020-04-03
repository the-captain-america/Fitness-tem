import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media';

const ThemeUI = {
	grid: {
		gutterWidth: 32,
		gridColumns: 12,
		breakpoints: [375, 768, 1024, 1440],
		containerWidths: ['100%', '100%', 984, 1224]
	}
};

const Grid = styled.div`
	position: relative;
	max-width: 100%;
	top: 48px;
	width: 100%;
	box-sizing: border-box;
	${media.md`
margin: 0 auto;
    width: 100%;
    padding: 0 ${ThemeUI.grid.gutterWidth / 2}px;
    max-width: ${ThemeUI.grid.containerWidths[2]}px;
`}

	${media.lg`
    margin: 0 auto;
    padding: 0 ${ThemeUI.grid.gutterWidth / 2}px;
    width: 100%;
    max-width: ${ThemeUI.grid.containerWidths[3]}px;
  `}
`;

export { Grid };
