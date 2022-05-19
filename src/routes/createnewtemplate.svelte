<script>
	import Editsidebar from '$lib/editSidebar.svelte';
	import SidebarToggle from '$lib/sidebarToggle.svelte';

	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;
</script>

<SidebarToggle />
<Editsidebar/>
