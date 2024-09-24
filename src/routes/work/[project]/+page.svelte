<script>
	import { colorCodes } from '$lib/TagColors.js';
	export let data;
</script>

<div>
	<h1>{data.title}</h1>
	<h3>
		this project utilizes
		{#each data.tags as tag}
			<span>[{colorCodes[tag].name}]&nbsp;</span>
		{/each}
	</h3>
</div>

<svelte:head>
	<title>Project: {data.title}</title>
</svelte:head>
