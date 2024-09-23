<script>
	import Tags from './Tags.svelte';
	import Backup from '$lib/robot.jpg';

	export let picture = Backup;
	export let title = 'Not a project!';
	export let types = ['ID', 'ME', 'CS'];
	/**
	 * @type {string[]}
	 */
	export let search = [];

	let hidden = false;

	for (let current of search) {
		if (!types.includes(current)) {
			hidden = true; // hide this card if the dicipline searched is not in this project
		}
	}
</script>

<a href="/work/#">
	<div class="card" class:hidden {title}>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={picture} alt="project image" class="image" />

		<h3 class="title">{title}</h3>

		<div class="tags">
			{#each types as type}
				<Tags Type={type} />
			{/each}
		</div>
	</div>
</a>

<style>
	.card {
		width: 20em;
		height: 15em;
		border-radius: 1em;
		overflow: hidden;
		margin: auto;
		position: relative;
		margin: 2em;
		transition: transform 0.2s;
	}
	.card:hover {
		box-shadow: 0 0 2em 0.05em #b3a27b;
		transform: translate(0, -0.5em);
	}
	.image {
		width: 100%;
		position: absolute;
		transform: translateX(-50%);
		z-index: -1;
	}
	.tags {
		position: absolute;
		bottom: 0;
		right: 1em;
		height: 20%;
	}
	.title {
		background-color: white;
		color: black;
		mix-blend-mode: screen;
	}
	a {
		text-decoration: none;
	}
	.hidden {
		display: none;
	}
</style>
