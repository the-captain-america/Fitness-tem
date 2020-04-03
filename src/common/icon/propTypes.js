import PropTypes from 'prop-types';

const propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	viewBox: PropTypes.string
};

export default propTypes;
