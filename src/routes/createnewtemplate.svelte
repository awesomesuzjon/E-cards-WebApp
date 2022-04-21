<script>
import Editsidebar from "$lib/editsidebar.svelte";
import SidebarToggle from "$lib/sidebar-toggle.svelte";
import Sidebar from "$lib/sidebar.svelte";
import {allowDrop,drag,drop} from '../routes/dragdropclone.svelte'
import { onMount } from "svelte";




	// let files;
	let firstName = [];
	$: fullName = `${firstName}`; 

//upload a new theme template from the local device
	let files = []
  $: file = files[0]




</script>



<SidebarToggle/>
<Editsidebar/>


<style>
	#divLeft {
height: 400px;
float: left;
}

#divRight {
height:400px;
float: left;
}
#divRight1 {
height: 55px;
width: 55px;
border: 1px solid #000;
}
</style>