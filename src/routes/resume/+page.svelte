<svelte:head>
	<title>Ali's Resume</title>
</svelte:head>

<div class="header">
	<h1>My Resume</h1>
</div>
<div class="container">
	<div id="resume">
		<div id="education" class="border section-style">
			<h2>Education</h2>
			<hr />
			<p>
				<b>B.S. Degree</b>, University of Utah, Salt Lake City, Utah
				<span class="timeline">Fall 2016 - Spring 2021</span>
			</p>
			<ul>
				<li>Majoring in <b>Mechanical Engineering</b>. Dean's List: Spring 2019, Fall 2020</li>
				<li>Minoring in <b>Computer Science</b>.</li>
			</ul>
		</div>
		<div id="skills" class="border section-style">
			<h2>Skills</h2>
			<hr />
			<ul>
				<li>CAD Design (SOLIDWORKS, CREO, NX)</li>
				<li>GD&T and Stack-up Analysis</li>
				<li>MATLAB, Arduino Programming</li>
				<li>Python, C++, C# Programming</li>
				<li>Rapid Prototyping using FDM and SLA methods</li>
			</ul>
			<ul>
				<li>Web Developement (HTML, CSS, JS)</li>
				<li>Microsoft Office Suite (Excel, PowerPoint, Word)</li>
				<li>Design Thinking Crash Course (((((TODO change this)))))</li>
				<li>Welding and Mill Machining training</li>
				<li>Project Leadership and Teamwork</li>
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

		font-family: Arial, Helvetica, sans-serif;
	}
	.section-style {
		padding: 1rem;
	}
	.border {
		border-style: solid;
		border-color: rgb(103, 103, 103, 0);
		border-radius: 1em;
	}
	.border:hover {
		border-color: rgb(103, 103, 103, 0.5);
	}
	.timeline {
		text-align: right;
		float: right;
	}
	#skills ul {
		display: inline-block;
	}
</style>
