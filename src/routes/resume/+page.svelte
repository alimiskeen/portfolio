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
		<div id="work" class="border section-style">
			<h2>Work Experience</h2>
			<hr />
			<h3 style="display: inline-block;">
				Mechanical Engineer and BOM Specialist - American Trailer Works
			</h3>
			<span class="timeline">Aug 2023 – TODO</span>
			<ul>
				<li>
					Proficiently implement Tacton CPQ software rules and models, creating an accurate trailer
					configurator for the sales engineers to present to customers.
				</li>
				<li>
					Orchestrated collaboration between engineers and technicians to optimize assembling
					process within Dynamics365 and Tacton to streamline manufacturing.
				</li>
				<li>
					Used SOLIDWORKS to adjust mechanical designs and drawings according to engineering change
					requests.
				</li>
				<li>
					Automated a critical process, resulting in a reduction of team’s work time from 240 hours
					to 96 hours - awarded the ‘Star of the Month’
				</li>
			</ul>
			<h3 style="display: inline-block;">Mechanical Design Engineer – Dometic Group</h3>
			<span class="timeline">Feb 2023 – Aug 2023</span>
			<ul>
				<li>
					Swiftly developed precise mechanical drawings with GD&T, especially for plastic injection
					manufacturing, streamlining quoting and tool development for manufacturers using Creo and
					SOLIDWORKS.
				</li>
				<li>
					Optimized product designs for manufacturability and conducting design analysis and
					validation, resulting in reduced tooling and production costs.
				</li>
			</ul>
			<h3 style="display: inline-block;">Mechanical Test Engineer – LAM Research</h3>
			<span class="timeline">Nov 2022 – Jan 2023</span>
			<ul>
				<li>
					Developed strategies and performed complex flow balance and thermal tests to functionally
					validate water flow and coolant temperatures within a manifold.
				</li>
				<li>
					Used NX to inspect CAD designs and develop a testing strategy and cultivate appropriate
					changes.
				</li>
				<li>
					Conduct a root-cause analysis to concoct an effective solution by collecting and compiling
					large datasets using Python.
				</li>
				<li>
					Acquired access and specialized training to operate within a clean room laboratory to
					conducted tests on Semiconductor manufacturing machinery.
				</li>
			</ul>
			<h3 style="display: inline-block;">CH53 Mechanical Drafting Engineer – Collins Aerospace</h3>
			<span class="timeline">June 2022 – Sep 2022</span>
			<ul>
				<li>
					Produced Mechanical drawings using NX CAD and drafting tools for an array of complex
					components, including ramp extensions, restraints, actuation mechanisms, and intermediate
					floors.
				</li>
				<li>
					Assimilated the Collins CH53 Drafting standards, leveraging manuals and training from the
					Collins team to begin drafting parts quicky.
				</li>
				<li>
					Led a team of drafting engineers to enhance efficiency and productivity, expanding the
					output of the team.
				</li>
				<li>
					Used Teamcenter and NX to primarily complete tasks and accelerate them through the design
					process.
				</li>
			</ul>
			<h3 style="display: inline-block;">Mechanical Engineer – L&T Technology Services</h3>
			<span class="timeline">Feb 2022 – June 2022</span>
			<ul>
				<li>
					Used Creo Parametric, SolidWorks and NX to extensively design a wide variety of parts,
					assemblies, and drawing. And running finite element analysis using SolidWorks.
				</li>
				<li>
					studied industry standards and engineering principles with the Genesis program through a
					three-month long lecture series taught by industry experts.
				</li>
				<li>
					Learned GD&T and Stack-up analysis. And learned Product design and manufacturing
					processes.
				</li>
			</ul>
		</div>
		<div id="projects" class="border section-style">
			<h2>Relevant Project</h2>
			<hr />
			<h3 style="display: inline-block;">Utah Student Robotics – Mechanical Team Lead</h3>
			<span class="timeline">August 2018 – May 2021</span>
			<ul>
				<li>Achieved 2nd place among 30+ universities in 2021 as the mechanical lead.</li>
				<li>
					Applied extensive SOLIDWORKS Modeling to create complex electromechanical mechanisms and
					assemblies.
				</li>
				<li>
					Utilized comprehensive 3D Printing, rapid prototyping, and Composites methods to
					manufacture robotic electromechanical parts and interfaces between mechanical, electrical
					components and sensors.
				</li>
				<li>
					Developed and manufactured using aluminum CNC machining to create robotic extendable arms
					that encounter high stresses and forces.
				</li>
				<li>
					Led a team of mechanical engineering students to build a multi-system robot tasked with
					mining the lunar surface.
				</li>
				<li>Served as the safety officer of the team’s lab during the 2019-2020 school year.</li>
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
		margin: 2em auto;
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
