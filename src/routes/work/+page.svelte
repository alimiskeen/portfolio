<script>
	import ProjectCard from './ProjectCard.svelte';
	import CategorySelector from './CategorySelector.svelte';
	import { colorCodes } from '$lib/TagColors.js';

	const categories = ['ME', 'ID', 'CS', 'EE'];
</script>

<svelte:head>
	<title>Ali's Work</title>
</svelte:head>

<h1 class="work-title">Work and Design</h1>

<div class="filter">
	<span>Specify a dicipline: </span>
	{#each categories as category}
		<CategorySelector {category} />
	{/each}
</div>

<div class="container">
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
</div>

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
