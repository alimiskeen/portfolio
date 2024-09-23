<script>
	import { page } from '$app/stores';

	let homeHover = 'visibility:hidden';
	let workHover = 'visibility:hidden';
	let resumeHover = 'visibility:hidden';
	let contactHover = 'visibility:hidden';
</script>

<nav>
	<a
		href="/"
		class="navlink {$page.url.pathname === '/' ? 'current' : ''}"
		on:mouseenter={() => (homeHover = '')}
		on:mouseleave={() => (homeHover = 'visibility:hidden')}
		><span style={homeHover}>[</span>
		Home
		<span style={homeHover}>]</span></a
	>
	<a
		href="/work"
		class="navlink {$page.url.pathname === '/work' ? 'current' : ''}"
		on:mouseenter={() => (workHover = '')}
		on:mouseleave={() => (workHover = 'visibility:hidden')}
		><span style={workHover}>[</span>
		Work
		<span style={workHover}>]</span></a
	>
	<a
		href="/resume"
		class="navlink {$page.url.pathname === '/resume' ? 'current' : ''}"
		on:mouseenter={() => (resumeHover = '')}
		on:mouseleave={() => (resumeHover = 'visibility:hidden')}
		><span style={resumeHover}>[</span>
		Resume
		<span style={resumeHover}>]</span></a
	>
	<a
		href="/contact"
		class="navlink {$page.url.pathname === '/contact' ? 'current' : ''}"
		on:mouseenter={() => (contactHover = '')}
		on:mouseleave={() => (contactHover = 'visibility:hidden')}
		><span style={contactHover}>[</span>
		Contact me!
		<span style={contactHover}>]</span></a
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
</style>
