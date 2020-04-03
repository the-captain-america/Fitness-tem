import React, { useEffect, useState } from 'react';
import { ControlFooter, ControlButton, ControlGroup } from './styledComponents';
const ControlBar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleMenu = () => setIsActive(!isActive);
	return (
		<ControlFooter>
			{isActive && <ControlGroup>Item</ControlGroup>}
			<ControlButton onClick={handleMenu}>
				<span className="icon">+</span>
			</ControlButton>
		</ControlFooter>
	);
};

export default ControlBar;
