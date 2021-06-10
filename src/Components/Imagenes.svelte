<script lang="ts">
	import VerFotos from './VerFotos.svelte';
    import { onMount } from "svelte";
    import { urlProcessImages } from "../Stores.js";
    import {
      Spinner       
    } from "sveltestrap";
    

    export let path: string;
    export let dir: string;

    let url = `${$urlProcessImages}get_files_d.php`;

    let promiseImagenes: any = [];
    const getImagenes = async () => {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ path: path, dir: dir }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        return await response.json();
    };
    onMount(() => {
        promiseImagenes = getImagenes();
    });
</script>

<div class="d-flex justify-content-center align-items-center flex-wrap vh-85 pt-2">
    {#await promiseImagenes}
    <Spinner
    color="secondary"
    size="lg"
    style="width: 5rem; height: 5rem;"
  />
    {:then imagenes}
        {#each imagenes as {src},i}
            <VerFotos {src} />
        {/each}
    {/await}
</div>
