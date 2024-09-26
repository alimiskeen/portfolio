import Portfolio from './portfolio.svelte';
import Carbon from './Carbon.svelte';
import Bucket from './Bucket.svelte';
import Charger from './Charger.svelte';

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
		page: Carbon
	},
	bucket: {
		url: 'bucket',
		title: 'Bucket Drum Digger Design',
		tags: ['ME', 'MFE'],
		picture: '/Designs-09.jpg',
		page: Bucket
	},
	charger: {
		url: 'charger',
		title: 'Wireless Charger phone stand',
		tags: ['ME', 'ID'],
		picture: '/20230523_220003.jpg',
		page: Charger
	}
};
