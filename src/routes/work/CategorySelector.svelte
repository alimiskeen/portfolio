<script>
	import { colorCodes } from '$lib/TagColors.js';
	export let category = 'ME';

	export let selected = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="envelope"
	class:selected
	style="--main-color: {colorCodes[category].mainColor}; --secondary-color: {colorCodes[category]
		.secondaryColor}"
	on:click={() => {
		selected = !selected;
	}}
>
	{colorCodes[category].name}
</div>

<style>
	.envelope {
		border-color: var(--main-color);
		color: var(--main-color);
		display: inline-block;
		padding: 5px 10px;
		border: solid 2px;
		border-radius: 20px;
		margin: 10px;
		user-select: none;
	}
	.envelope:hover {
		background-color: var(--main-color);
		border-color: var(--main-color);
		color: var(--secondary-color);
		cursor: pointer;
	}
	.selected {
		background-color: var(--main-color);
		border-color: var(--main-color);
		color: var(--secondary-color);
		cursor: pointer;
	}
	.selected:hover {
		border-color: var(--secondary-color);
		color: var(--secondary-color);
	}
</style>
