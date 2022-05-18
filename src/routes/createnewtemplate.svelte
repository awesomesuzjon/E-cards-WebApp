<script>
	import Editsidebar from '$lib/editsidebar.svelte';
	import SidebarToggle from '$lib/sidebar-toggle.svelte';

	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

	//upload a new theme template from the local device
	let files = [];
	$: file = files[0];
</script>

<SidebarToggle />
<Editsidebar />
