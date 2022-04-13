<script lang="ts">
	import '../app.css';
	const navList = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Random Image',
			path: '/random_image'
		},
	]
</script>

<header class="flex justify-center bg-slate-700">
	<nav class="flex w-1/2 h-full items-center">
		{#each navList as navEl, i}
			<a href={navEl.path} class="w-3/12 h-full hover:bg-slate-700 flex justify-center items-center text-white font-bold">{navEl.title}</a>
		{/each}
	</nav>
</header>

<main>
	<slot />
</main>

<footer class="flex justify-center items-center bg-indigo-300">
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	header {
		height: 10vh;
	}
	main {
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	footer {
		height: 10vh;
	}
</style>
