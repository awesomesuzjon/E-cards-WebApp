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

<div class="flex flex-col items-start justify-center  ">
	<h1 class="text-sm font-bold  truncate  ">Enter text here:</h1>
	<input
		type="text"
		id="addNew"
		name="addNewList"
		class="text-black"
		on:enterkeyhint={pushTextToCanvasFunc}
	/>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a on:click={pushTextToCanvasFunc} class="my-4"><Button>Add text</Button></a>

	<label for="my-drawer-4" class="drawer-button ">
		<!-- svelte-ignore a11y-missing-attribute -->
		<btn class="btn"> Open Editbar </btn>
	</label>
</div>
