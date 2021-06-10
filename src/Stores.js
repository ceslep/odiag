import {readable,writable} from "svelte/store";

export const usuario=readable({
    usuario:"ceslep@gmail.com",
    contrasena:"1234"
})

export const cliente=writable('42759761');

export const urlProcessImages = readable("http://127.0.0.1/odiag/php/");