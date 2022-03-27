<script lang="ts">
	import '../app.css';
</script>

<header class="h-32 flex justify-center bg-slate-200">
	<nav class="flex w-1/2 h-full items-center">
		<a href="/list" class="w-3/12 h-full hover:bg-slate-700 flex justify-center items-center">List</a>
		<a href="/" class="w-3/12 h-full hover:bg-slate-700 flex justify-center items-center">smth</a>
		<a href="/" class="w-3/12 h-full hover:bg-slate-700 flex justify-center items-center">dasd</a>
		<a href="/" class="w-3/12 h-full hover:bg-slate-700 flex justify-center items-center">ds</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer class="h-32 flex justify-center items-center bg-indigo-300">
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
