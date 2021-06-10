<script lang="ts">
   
	import ListaTotalDirectorios from './Components/ListaTotalDirectorios.svelte';
    import { Router, Link, Route } from "svelte-routing";
    import NavBar from "./Components/NavBar.svelte";
    import Login from "./Components/Login.svelte";
    import Imagenes from "./Components/Imagenes.svelte";
import Foto from './Components/Foto.svelte';
    
    

    export let url = "";
</script>

<NavBar />

<Router {url}>
    <div>
        <Route path="login" >
            <Login />
        </Route>
        <Route path="listatotaldirectorios">
            <ListaTotalDirectorios />
        </Route>
        <Route path="verfotos/:path/:dir" let:params>
            <Imagenes path="{params.path}" dir="{params.dir}"/>
        </Route>
        <Route path="foto/:src" let:params>
            <Foto src="{params.src}"/>
        </Route>
    </div>
</Router>
