<script>
	import Editsidebar from '$lib/dropDownEditbar/editsidebar.svelte';
	import SidebarToggle from '../lib/addToCanvas/sidebarToggle.svelte';

	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;
</script>

<SidebarToggle />
<Editsidebar/>
