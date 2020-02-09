/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SiteProvider } from './src/__context__/SiteContext';
import { ShowProvider } from './src/__context__/ShowContext';

// Import our themes
import themes from './src/__themes__';

// Handle Application wrapper
// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
	<SiteProvider>
		<ShowProvider>
			<ThemeProvider theme={themes.primary}>{element}</ThemeProvider>
		</ShowProvider>
	</SiteProvider>
);

export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (!(`IntersectionObserver` in window)) {
		import('intersection-observer'); // eslint-disable-line
		console.log(`# IntersectionObserver is polyfilled!`);
	}
};
