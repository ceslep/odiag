<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "sveltestrap";

  import {onMount} from "svelte";
  import { CloudDownload, CardImage, WindowSidebar } from "svelte-bootstrap-icons";

  import Swal from "sweetalert2";
  import { navigate } from "svelte-routing";

  export let src;

 let Width:any;
 const height=(width:number):number=>{return Math.round(width*1.5);}
  onMount(()=>{
    
    Width=`${window.innerWidth}px`;
    if (window.innerWidth>1000) styleWidth=`width:200px;height:${height(200)}px`;
    else
    if ((window.innerWidth>600)&&(window.innerWidth<=1000)) styleWidth=`width:400px;height:${height(400)}px`;
    else
    styleWidth=`width:100%;height:${height(0.8*window.innerWidth)}px`;
  });

  $:console.log(Width);
  const clickImageFull = (src) => {
    navigate(`/foto/${encodeURIComponent(src)}`);
  };

  const clickImage = (src: string) => {
    Swal.fire({
      html: `<img src=${src} class="img-fluid" alt=''>`,
      showCloseButton: true,
      focusConfirm: false,
      width:Width,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i>Cerrar',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  };

  let styleWidth:string="";
  
</script>

<Card class="mb-3 mb-3 mx-2" style={styleWidth} >
  <CardHeader>
    <CardTitle class="d-flex justify-content-center align-items-center"
      ><Button
        color="info"
        outline
        size="sm"
        on:click={() => clickImageFull(src)}><CardImage /></Button
      ></CardTitle
    >
  </CardHeader>
  <CardBody class="d-flex justify-content-center align-items-center">
    <a href="#!" on:click|preventDefault={() => clickImage(src)}
      ><img class="img-fluid" {src} alt="" />
    </a>
  </CardBody>
  <CardFooter><Button block>Descargar <CloudDownload /></Button></CardFooter>
</Card>

<style>
  
  </style>