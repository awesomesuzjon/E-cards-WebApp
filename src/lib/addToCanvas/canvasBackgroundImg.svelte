<script>
	import Button from '../reusable/button.svelte';
</script>

<div class="text-sm my-2  ">
	<h1 class="font-bold dark:text-gray-100  truncate text-black text-sm">Select Background Image</h1>

	<input
		id="canvasFileInput"
		class="my-2 w-72 ml-6 text-sm text-white bg-red-700  rounded-lg border border-gray-300 cursor-pointer dark:text-white focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-red-700"
		type="file"
	/>

	<!-- <Button id='removeBgImg'>Remove</Button> -->
	<a id="removeBgImg"><Button>Remove</Button></a>
</div>

<style>
	input[type='file']::file-selector-button {
		border: 2px solid transparent;
		border-right: black;
		background-color: hwb(0 13% 23%);
		transition: 1s;
	}
</style>
