<script>
	import Background from '$lib/nature.jpg';
</script>

<div class="container">
	<img src={Background} class="background" alt="Background" />
	<h1 class="title-text">Welcome!</h1>
</div>

<style>
	.background {
		width: 100%;
		height: 48em;
		object-fit: cover;
	}

	.container {
		margin-left: 0;
		margin-right: 0;
		position: relative;
		text-align: center;
	}

	.title-text {
		position: absolute;
		font-size: 8vw;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -100%);
		background-color: white;
		color: black;
		padding-left: 1.3%;
		padding-right: 1.3%;
		mix-blend-mode: screen;
	}
</style>
