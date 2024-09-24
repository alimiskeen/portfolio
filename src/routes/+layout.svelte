<script>
	// @ts-nocheck

	import { page } from '$app/stores';

	let homeHover = true;
	let workHover = true;
	let resumeHover = true;
	let contactHover = true;
</script>

<nav>
	<a
		href="/"
		class="navlink {$page.url.pathname === '/' ? 'current' : ''}"
		on:mouseenter={() => (homeHover = false)}
		on:mouseleave={() => (homeHover = true)}
		><span class:hovering={homeHover}>[</span>
		Home
		<span class:hovering={homeHover}>]</span></a
	>
	<a
		href="/work"
		class="navlink {$page.url.pathname === '/work' ? 'current' : ''}"
		on:mouseenter={() => (workHover = false)}
		on:mouseleave={() => (workHover = true)}
		><span class:hovering={workHover}>[</span>
		Work
		<span class:hovering={workHover}>]</span></a
	>
	<a
		href="/resume"
		class="navlink {$page.url.pathname === '/resume' ? 'current' : ''}"
		on:mouseenter={() => (resumeHover = false)}
		on:mouseleave={() => (resumeHover = true)}
		><span class:hovering={resumeHover}>[</span>
		Resume
		<span class:hovering={resumeHover}>]</span></a
	>
	<a
		href="/contact"
		class="navlink {$page.url.pathname === '/contact' ? 'current' : ''}"
		on:mouseenter={() => (contactHover = false)}
		on:mouseleave={() => (contactHover = true)}
		><span class:hovering={contactHover}>[</span>
		Contact me!
		<span class:hovering={contactHover}>]</span></a
	>
	<!-- <span class="name">Ali A. Almiskeen</span> -->
</nav>

<slot />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	:global(body) {
		background-color: #fff8e8;
		margin: 0;
		font-family: 'Kode Mono', monospace;
		overflow-x: hidden;
	}

	nav {
		backdrop-filter: blur(5px);
		width: 100%;
		padding: 1em 1rem;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.name {
		position: relative;
		text-align: right;
	}

	.navlink,
	.navlink:visited {
		color: #414d38;
		margin-left: 0.8em;
		display: inline-block;
		text-decoration: none;
	}

	.navlink.current {
		color: #5f6840;
	}

	.navlink:hover {
		color: #414d38;
	}

	.hovering {
		visibility: hidden;
	}
</style>
