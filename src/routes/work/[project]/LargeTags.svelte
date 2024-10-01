<script>
	// @ts-nocheck
	import { colorCodes } from '$lib/TagColors.js';

	export let tag = 'ID';
</script>

<div
	class="tag"
	title={colorCodes[tag].name}
	style="--main-color: {colorCodes[tag] ? colorCodes[tag].mainColor : 'white'};
		   --secondary-color: {colorCodes[tag] ? colorCodes[tag].secondaryColor : 'black'};"
>
	<span class="tag-text">{colorCodes[tag].name}</span>
</div>

<style>
	.tag {
		background-color: var(--main-color);
		padding: 6px 6px 6px 6px;
		border-radius: 1em;
		margin-left: 0.1em;
		margin-right: 0.1em;
		display: inline-block;
	}
	.tag-text {
		/* font-size: x-large; */
		user-select: none;
		color: var(--secondary-color) !important;
		padding-left: 0.5em;
		padding-right: 0.5em;
	}
</style>
