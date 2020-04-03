import React from 'react';
import { HeaderComponent } from './components/header-component';
import { ContentComponent } from './components/content-component';
import { ControlComponent } from './components/control-component';
// import { LegendComponent } from './components/legend-component';
import { RatingComponent } from './components/rating-component';
import { ModuleComponent } from './components/module-component';
import { SectionComponent } from './components/section-component';
import { HeroComponent } from './components/hero-component';
import { AssessmentContainer } from './containers/assessment-container';
import { ButtonComponent } from './common/ui/button-component';
import { Grid } from './common/ui/grid';
import './styles.css';

import wheel from './assets/images/action-wheel.svg';
import styled from 'styled-components';

import pages from './data.js';

const Image = styled.img`
	width: 100%;
	height: 200px;
	display: block;
`;

/*
`Each of the performance preferences presents a consistent pattern of behaviors and
	differences in the ways individuals see life and take action. The six dimensions of action
	and their performance preference counterparts are:`, 
	*/

const Application = () => {
	const [state, setState] = React.useState({
		darkMode: false,
		page: 0,
		showNotes: false
	});

	const handleNotes = () => {
		setState(state => ({ ...state, showNotes: true }));
	};

	const handleClose = () => {
		setState(state => ({ ...state, showNotes: false }));
	};

	const setPage = value => {
		setState(state => ({ ...state, page: value }));
	};

	React.useEffect(() => {
		document.body.style.backgroundColor = '#F5F6FA';
		return () => {
			document.body.style.backgroundColor = null;
		};
	}, []);
	return (
		<React.Fragment>
			<HeaderComponent onPressRight={handleNotes} />
			<Grid>
				<ModuleComponent handleClose={handleClose} isActive={state.showNotes} />
				<SectionComponent title="Assessment">
					<p>Take the Performance Preferences Assessment</p>
					<ButtonComponent>Take the Assessment</ButtonComponent>
				</SectionComponent>

				<AssessmentContainer />

				<HeroComponent imageSrc="https://cdn3.vectorstock.com/i/1000x1000/11/92/isometric-paper-work-vector-21351192.jpg" />
				<ContentComponent currentPage={pages[state.page]}>
					<ControlComponent pages={pages} callback={setPage} />
				</ContentComponent>
			</Grid>
			<Image alt="wheel" src={wheel} />
			{/* <LegendComponent isLeft={1} currentPage={state.page} legends={legends} /> */}
		</React.Fragment>
	);
};

/**
 * props: [{ name: 'First Option', disabled: false }]
 */
