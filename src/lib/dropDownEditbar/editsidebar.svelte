<script>
	import DropDownText from '$lib/dropDownEditbar/dropDownText.svelte';
	import DropDownStickers from '$lib/dropDownEditbar/dropDownStickers.svelte';
	// import DropDownBackground from '$lib/dropDownEditbar/dropDownBackground.svelte';
	// import DropDownMessage from '$lib/dropDownEditbar/dropDownMessage.svelte';
</script>

<div class="drawer invisible bg-gray-800 drawer-end w-1/3" id="editPanelDiv">
	<div
		class="
   drawer-side w-full h-screen "
	>
		<ul class="divide-y-2  text-sm text-white">
			<!-- Sidebar content here -->
			<DropDownText />
			<DropDownStickers />
			<!--<DropDownMessage />
			<DropDownBackground /> -->
		</ul>
	</div>
</div>
