<script>
	import Button from '../reusable/button.svelte';
</script>

<div class="text-sm   ">
	<h1 class="font-bold dark:text-gray-100 mb-2 truncate text-black text-sm">
		Select Background Image
	</h1>

	<input
		id="canvasFileInput"
		class="my-2 w-72 ml-6 text-sm text-white bg-red-700 rounded-lg border border-gray-300 cursor-pointer dark:text-white focus:outline-none dark:bg-red-700 dark:border-gray-600 dark:placeholder-red-700"
		type="file"
	/>

	<!-- <Button id='removeBgImg'>Remove</Button> -->
	<a id="removeBgImg"><Button>Remove</Button></a>
</div>
