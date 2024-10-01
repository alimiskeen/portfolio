<script>
	import Tags from './Tags.svelte';

	export let url = '#';
	export let picture = '/robot.jpg';
	export let title = 'Not a project!';
	export let tags = ['ID', 'ME', 'CS'];

	/**
	 * @type {string[]}
	 */
	export let search = [];

	let hidden = false;

	for (let current of search) {
		if (!tags.includes(current)) {
			hidden = true; // hide this card if the dicipline searched is not in this project
		}
	}

	let maxLength = 52;
	var cardTitle = title;

	if (title.length > maxLength) {
		cardTitle = cardTitle.substring(0, maxLength) + '...';
	}
</script>

<a href="/work/{url}">
	<div class="card" class:hidden {title}>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={picture} alt="image" class="image" />

		<h3 class="title">{cardTitle}</h3>

		<div class="tags">
			{#each tags as tag}
				<Tags {tag} />
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
		min-height: 100%;
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
		/* mix-blend-mode: screen; */
	}
	a {
		text-decoration: none;
	}
	.hidden {
		display: none;
	}
</style>
