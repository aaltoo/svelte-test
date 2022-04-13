<script lang="ts">
import { onMount } from 'svelte';

  import httpClient from '../api/httpClient'
  let result = null
  let isFetching = false
  const fetchImage = () => {
    isFetching = true
    httpClient.get(`/random/?selected_tags=waifu`)
   .then(res => {
     result = res.data.images[0]
     isFetching = false
   })
  }
  onMount(() => {
    fetchImage()
  })
</script>

<div class="flex flex-col justify-center items-center">
  <div class="h-96 w-96 flex justify-center items-center mb-10">
    {#if result && !isFetching}
      <img src={result.url} class="object-contain h-full w-full">
    {/if}
    {#if isFetching}
      <h1>Loading...</h1>
    {/if}
  </div>
  <button on:click={fetchImage} disabled={isFetching} class="bg-slate-400 p-4 rounded-full" style={isFetching ? 'opacity: 0.5; cursor: not-allowed' : ''}>Load new image</button>
</div>

<style>
</style>
