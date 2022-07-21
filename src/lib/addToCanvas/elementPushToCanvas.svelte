<script>
	import { onMount } from 'svelte';
	import Button from '$lib/reusable/button.svelte';

	import { pushTextToCanvasFunc } from '../../utils/pushTextToCanvas';

	onMount(() => {
		document.getElementById('addNew').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				pushTextToCanvasFunc();
			}
		});
	});
</script>

<div class="flex flex-col items-center justify-center  mt-2 ">
	<h1 class="text-sm font-bold  truncate 2xl:text-3xl  text-black dark:text-white">Enter text here:</h1>
	<input
		type="text"
		id="addNew"
		name="addNewList"
		class="text-black mt-2 h-8 2xl:h-12 2xl:my-4 rounded"
		on:enterkeyhint={pushTextToCanvasFunc}
	/>
	
</div>
