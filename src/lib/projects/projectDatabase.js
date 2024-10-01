import Portfolio from './portfolio.svelte';
import Carbon from './Carbon.svelte';
import Bucket from './Bucket.svelte';
import Charger from './Charger.svelte';
import Ballast from './Ballast.svelte';
import Arms from './Arms.svelte';
import Aquatic from './Aquatic.svelte';
import Rgb from './Rgb.svelte';
import Perching from './Perching.svelte';

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
	},
	ballast: {
		url: 'ballast',
		title: 'Ballast System using a one-way chain and a syringe',
		tags: ['ME'],
		picture: '/syringe.jpg',
		page: Ballast
	},
	arms: {
		url: 'arms',
		title: 'Aluminum Extendable Arms',
		tags: ['ME', 'MFE'],
		picture: '/Designs-12.jpg',
		page: Arms
	},
	aquatic: {
		url: 'aquatic',
		title: 'Development of an Unmanned Aerial-Aquatic Drone with Buoyancy Control',
		tags: ['ME'],
		picture: '/Capture1.jpg',
		page: Aquatic
	},
	rgb: {
		url: 'rgb',
		title: 'RGB Ceiling Project',
		tags: ['ME', 'CS'],
		picture: '/IMG_20200411_224951.jpg',
		page: Rgb
	},
	perching: {
		url: 'perching',
		title:
			'Design and Evaluation of an Enhanced Perching Hexacopter Drone for Harvesting Energy from Power Lines',
		tags: ['ME', 'CS'],
		picture: '/gghgfhf.jpg',
		page: Perching
	}
};
