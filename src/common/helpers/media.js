import { css } from 'styled-components';

const breakpoints = {
	xs: '(max-width: 320px)',
	sm: '(max-width: 768px)',
	md: '(max-width: 1024px)',
	lg: '(max-width: 1280px)',
	xl: '(min-width: 1281px)'
};

export const media = {
	xs: (...args) =>
		css`
			@media ${breakpoints.xs} {
				${css(...args)}
			}
		`,
	sm: (...args) =>
		css`
			@media ${breakpoints.sm} {
				${css(...args)}
			}
		`,
	md: (...args) =>
		css`
			@media ${breakpoints.md} {
				${css(...args)}
			}
		`,
	lg: (...args) =>
		css`
			@media ${breakpoints.lg} {
				${css(...args)}
			}
		`
};
