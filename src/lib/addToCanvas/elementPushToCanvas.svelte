<script>
import { onMount } from 'svelte';

	import { pushTextToCanvasFunc } from '../../utils/pushTextToCanvas';

	onMount(()=>{

		document.getElementById('addNew').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				pushTextToCanvasFunc()	
			}
		})
});
</script>

<div class="flex flex-col items-start justify-center  ">
	<h1 class="text-sm font-bold  truncate  ">Enter text here:</h1>
	<input type="text" id="addNew" name="addNewList" class="text-black"  on:enterkeyhint={pushTextToCanvasFunc}/>
	

	<btn
    on:click={pushTextToCanvasFunc}
		class="cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-24 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center justify-left flex "
		>Add text</btn
	>

	<label for="my-drawer-4" class="drawer-button">
		<btn
			class="cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-24 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center justify-left flex "
			>Open Editbar</btn
		>
	</label>
</div>
