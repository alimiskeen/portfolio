<script>
	import { colorCodes } from '$lib/TagColors.js';
	import LargeTags from './LargeTags.svelte';
	export let data;
</script>

<svelte:head>
	<title>Project: {data.title}</title>
</svelte:head>

<div class="header">
	<h1>{data.title}</h1>
	<h3>
		this project utilizes
		{#each data.tags as tag}
			<LargeTags {tag} />
		{/each}
	</h3>
</div>

<hr />

<svelte:component this={data.page} />

<style>
	.header {
		width: 80%;
		margin: 5em auto;
		text-align: center;
	}
	.header h1 {
		font-size: 3em;
	}
</style>
