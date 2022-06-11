<script>
	import DropDownText from '$lib/dropDownEditbar/dropDownText.svelte';
	import DropDownStickers from '$lib/dropDownEditbar/dropDownStickers.svelte';
	// import DropDownBackground from '$lib/dropDownEditbar/dropDownBackground.svelte';
	// import DropDownMessage from '$lib/dropDownEditbar/dropDownMessage.svelte';
</script>

<div class="drawer invisible  drawer-end w-1/3" id="editPanelDiv">
	<!-- Sidebar content here -->
	<DropDownText />
	<DropDownStickers />
	<!--<DropDownMessage />
			<DropDownBackground /> -->
</div>
