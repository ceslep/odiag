<script lang="ts">
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
        FormGroup,
        Label,
        Input,
    } from "sveltestrap";

    import { navigate } from "svelte-routing";

    import { usuario, session } from "../Stores.js";
    import { onDestroy } from "svelte";
    import Swal from "sweetalert2";
    import { fade } from "svelte/transition";

    let login = {
        usuario: "",
        contrasena: "",
    };

    let usuarioLegal: any;
    const unsubscribe = usuario.subscribe((value) => {
        usuarioLegal = value;
    });

    let estado;

    let unSubscribeSession=session.subscribe(value=>estado=value);

    onDestroy(()=>{
        unsubscribe();
        unSubscribeSession();
    });

    const ingresar = async () => {
        if (
            !(
                login.usuario === usuarioLegal.usuario &&
                login.contrasena === usuarioLegal.contrasena
            )
        ) 
           
            Swal.fire({
                icon: "success",
                title: "Ha ingresado Correctamente",
                text: "Bienvenido!",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
         else {
            session.iniciar(login.usuario);
            $usuario.usuario=login.usuario;
            navigate("/listatotaldirectorios", { replace: true });
         }
    };

    const cpr = `OrthoDiagnosticar ` + new Date().getFullYear();
</script>

<div
    transition:fade
    class="d-flex justify-content-center align-items-center divInicio"
>
    <Card class="mb-3">
        <CardHeader>
            <CardTitle>Inicio de Sesión</CardTitle>
        </CardHeader>
        <CardBody>
            <FormGroup>
                <Label for="usuario">Usuario</Label>
                <Input
                    bind:value={login.usuario}
                    id="usuario"
                    placeholder="Correo registrado de usuario"
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Contrasena</Label>
                <Input
                    bind:value={login.contrasena}
                    type="password"
                    name="contraseña"
                    id="password"
                    placeholder="Ingrese su contraseña"
                />
            </FormGroup>
            <Button block color="primary" on:click={ingresar}>Ingresar</Button>
        </CardBody>
        <CardFooter>&#169;{cpr}</CardFooter>
    </Card>
</div>


<style>
    .divInicio{
        height: 80vh;
    }
</style>
