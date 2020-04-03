import React, { useEffect } from 'react';
import { Icon } from '../../common';
import {
	Container,
	PageLayout,
	Title,
	TileIcon,
	TileContainer,
	Tile
} from './styledComponents';

const Landing = () => {
	const [data, setData] = React.useState({
		items: []
	});
	const renderMenu = () => {
		const { items } = data;
		if (!items || items.length < 1) return <></>;
		const list = items.map((item, index) => (
			<Tile key={index}>
				<Title>{item.name}</Title>
				<TileIcon>
					<Icon name={item.icon} size={24} />
				</TileIcon>
			</Tile>
		));
		return <TileContainer>{list}</TileContainer>;
	};

	useEffect(() => {
		setData(state => ({
			...state.items,
			items: [
				{ name: 'Fitness', icon: 'ADD' },
				{ name: 'Training', icon: 'lifting' },
				{ name: 'Mood', icon: 'mood' },
				{ name: 'meals', icon: 'meals' }
			]
		}));
	}, []);
	return (
		<Container>
			<PageLayout>{renderMenu()}</PageLayout>
		</Container>
	);
};

export default Landing;
