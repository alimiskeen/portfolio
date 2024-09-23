<script>
	import { tagColors, colorCodes } from '$lib/TagColors.js';

	export let Type = 'ID';
</script>

<div class="tag" style="background-color: {tagColors.get(Type) ? tagColors.get(Type) : 'white'};">
	<span class="tag-text">{Type}</span>
</div>

<style>
	.tag {
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
		color: black !important;
	}
</style>
