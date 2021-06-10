<script lang="ts">
    
    import { link } from "svelte-routing";
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";

    import { PersonCircle } from "svelte-bootstrap-icons";
    

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

   
</script>

<Navbar color="info" light expand="md" class="sticky-top">
    <NavbarBrand href="/">Orthodiagnosticar</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem>
                <a href="/login" class="login" use:link> Iniciar sesión <PersonCircle/></a>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>





<style>
    .login{
        text-decoration:none;
        color:white;
    }
    </style>