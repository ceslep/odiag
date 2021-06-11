<script lang="ts">
    import ListaDirectorios from "./ListaDirectorios.svelte";
    import { onMount } from "svelte";
    import { cliente,urlProcessImages } from "../Stores.js";

    import { Spinner } from "sveltestrap";

    
    let url = `${$urlProcessImages}get_files.php`;
    let PromiseDirectorios: any = [];

    const getDirectorios = async (cliente: string) => {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ cliente: cliente }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        return await response.json();
    };

    onMount(() => {
        PromiseDirectorios = getDirectorios($cliente);
        
    });
</script>

<h1>Listado de Carpetas</h1>
<div class="d-flex justify-content-center align-items-center">
    {#await PromiseDirectorios}
    
    <div class="divInicio">
        <Spinner size="md" type="grow" />
    </div>

    {:then carpetas}
        {#each carpetas as { path,directorio }, i}
            <ListaDirectorios {path} {directorio}  />
        {/each}
    {/await}
</div>

<style>
    .divInicio{
        height: 80vh;
    }
</style>
