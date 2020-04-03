import styled from 'styled-components';

const Container = styled.div`
	padding-top: 48px;
`;
const PageLayout = styled.div``;
const TileContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0 auto;
	min-width: 360px;
	max-width: 400px;
	margin: 0 auto;
	justify-content: space-between;
	width: calc(100% - 40px);
`;

const TileIcon = styled.div``;

const Title = styled.span`
	display: none;
`;
const Tile = styled.div`
	border-radius: 10px;
	background: white;
	width: calc(50% - 40px);
	padding: 16px;
	min-width: 80px;
	min-height: 150px;
	margin-bottom: 16px;
	transition: all 0.25s ease-in-out;
	box-shadow: rgba(9, 6, 74, 0.15) 0px 2px 34px 0px;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

export { Container, Title, TileIcon, TileContainer, Tile, PageLayout };
