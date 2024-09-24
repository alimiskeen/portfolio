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
	<span class="tag-text">{tag}</span>
</div>

<style>
	.tag {
		background-color: var(--main-color);
		bottom: 0;
		height: 100%;
		padding: 6px 6px 6px 6px;
		border-top-left-radius: 0.3em;
		border-top-right-radius: 0.3em;
		margin-left: 0.5em;
		display: inline-block;
	}
	.tag-text {
		font-size: x-large;
		user-select: none;
		color: var(--secondary-color) !important;
	}
</style>
