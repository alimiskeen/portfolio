<script>
	// @ts-nocheck

	import ProjectCard from './ProjectCard.svelte';
	import CategorySelector from './CategorySelector.svelte';
	import { colorCodes } from '$lib/TagColors.js';
	import { projects } from '$lib/projects/projectDatabase.js';

	const categories = Object.keys(colorCodes);
	const projectTitles = Object.keys(projects);

	/**
	 * @type {string[]}
	 */
	let search = [];

	// adds a dicipline to the search array to be used by each ProjectCard if the CategorySelector is clicked
	function searchAdjustment(event) {
		if (event.detail.selected) {
			search = [...search, event.detail.category];
		} else {
			search = search.filter((e) => e !== event.detail.category);
		}
	}
</script>

<svelte:head>
	<title>Ali's Work</title>
</svelte:head>

<h1 class="work-title">Work and Design</h1>

<div class="filter">
	<span>Specify a dicipline: </span>
	{#each categories as category}
		<CategorySelector {category} on:selected={searchAdjustment} />
	{/each}
</div>

{#key search}
	<div class="container">
		{#each projectTitles as project}
			<ProjectCard {search} {...projects[project]} />
		{/each}
		<ProjectCard {search} />
	</div>
{/key}

<style>
	.work-title {
		text-align: center;
		font-size: 4em;
	}
	.container {
		margin-top: 2em;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		width: 90%;
	}
	.filter {
		height: 5rem;
		width: 100%;
		padding-left: 5rem;
	}
	span {
		user-select: none;
	}
</style>
