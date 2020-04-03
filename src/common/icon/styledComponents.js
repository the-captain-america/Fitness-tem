import styled from 'styled-components';

const Svg = styled.svg`
	${props => props.rotate && `transform: rotate(${props.rotate}deg);`}
	transition: all .2s;
`;

export { Svg };
