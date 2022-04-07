<script>
import Editsidebar from "$lib/editsidebar.svelte";
import SidebarToggle from "$lib/sidebar-toggle.svelte";
import Sidebar from "$lib/sidebar.svelte";
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