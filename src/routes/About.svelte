<script>
	import Portrait from '$lib/portrait.jpg';
	// TODO: finish this section with better design
</script>

<div class="statement">
	<!-- <h1 style="text-align: center;">Hello There</h1> -->
	<p style="display: inline-block;">
		<img src={Portrait} alt="portrait" class="portrait" />
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, doloribus iure. Ex quisquam dolorem
		aut, maiores facere excepturi molestiae omnis quo. Quidem iste voluptate itaque aperiam nemo architecto
		fugiat fuga.
		<br />
		<br />
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et veritatis adipisci? Corrupti
		iste eos rerum eius officia omnis doloribus maiores explicabo rem! Cum veritatis blanditiis dolore
		temporibus, nam quae.
	</p>
</div>

<style>
	.statement {
		width: 80%;
		margin-inline: auto;
		margin-top: 2em;
		border: 1px;
		display: block;
	}

	.portrait {
		float: left;
		/* max-width: 30%; */
		height: 30em;
		margin: 0 40px;
		border-radius: 10px;
	}
</style>
