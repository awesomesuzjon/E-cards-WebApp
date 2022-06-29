<script>
	import SaveTemplate from '../addToCanvas/saveTemplate.svelte';
	import EditSidebar from '../dropDownEditbar/editsidebar.svelte';
	import Canvas from './canvas.svelte';
	import SidebarInput from './sidebarInput.svelte';
</script>

<div class="flex ">
	<SidebarInput />
	<Canvas />
	<EditSidebar />
</div>

<!-- <p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>

<div>
	<button class="btn" id="saveAsPdf">Save as PDF</button>
	<button class="btn" id="saveAsImg">Save as Img</button>

	<SaveTemplate />
</div> -->
