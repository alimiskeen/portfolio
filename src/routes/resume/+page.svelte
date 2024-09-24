<svelte:head>
	<title>Ali's Resume</title>
</svelte:head>

<div class="continer">
	<div class="header">
		<h1>My Resume</h1>
	</div>
	<div id="resume">
		<div id="education">
			<h3>Education</h3>
			<hr />
			<p>
				<b>B.S. Degree,</b> University of Utah, Salt Lake City, Utah
				<span class="timeline">Fall 2016 - Spring 2021</span>
			</p>
			<ul>
				<li>Majoring in <b>Mechanical Engineering</b>. Dean's List: Spring 2019, Fall 2020</li>
				<li>Minoring in <b>Computer Science</b>.</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.header {
		text-align: center;
		padding-top: 2em;
		padding-bottom: 2em;
		font-size: xx-large;
		border-color: black;
		border-style: none none solid none;
		border-width: 2px;
		width: 100%;
	}
	.container {
		width: 80%;
		min-width: 20em; /* TODO change this number to something accurate */
		margin: auto;
	}
	#resume {
		width: 80%;
		margin: auto;
		padding: 1rem;
		border-style: solid;
		border-color: rgb(103, 103, 103, 0);
		border-radius: 1em;
		font-family: Arial, Helvetica, sans-serif;
	}
	#resume:hover {
		border-color: rgb(103, 103, 103);
	}
	.timeline {
		display: inline-block;
		text-align: right;
		float: right;
	}
</style>
