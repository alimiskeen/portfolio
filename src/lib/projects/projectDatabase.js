import Portfolio from './portfolio.svelte';

export const projects = {
	portfolio: {
		url: 'portfolio',
		title: 'This Website!',
		tags: ['CS', 'GD'],
		picture: '/code-snippit.png',
		page: Portfolio
	},
	carbon: {
		url: 'carbon',
		title: 'Carbon Fiber Rocker-Bogie',
		tags: ['ME', 'MFE'],
		picture: '/Designs-39.jpg',
		page: NaN //TODO: import
	},
	bucket: {
		url: 'bucket',
		title: 'Bucket Drum Digger Design',
		tags: ['ME', 'MFE'],
		picture: '/Designs-09.jpg',
		page: NaN //TODO: import
	},
	charger: {
		url: 'charger',
		title: 'Wireless Charger phone stand',
		tags: ['ME', 'ID'],
		picture: '/20230523_220003.jpg',
		page: NaN //TODO: import
	}
};
