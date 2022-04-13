<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Search from '../lib/Search.svelte'
</script>

<svelte:head>
	<title>Рандомная картинка</title>
</svelte:head>

<section>
  <Search />
</section>

<style>
</style>
