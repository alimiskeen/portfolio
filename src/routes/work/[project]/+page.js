// @ts-nocheck
import { projects } from '$lib/projects/projectDatabase.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (!projects[params.project]) {
		throw error(404, 'Page not found!');
	}
	return projects[params.project];
}
