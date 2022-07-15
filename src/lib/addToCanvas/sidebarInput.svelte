<script>
	import Stickers from '../addToCanvas/stickers.svelte';
	import ElementPushToCanvas from '../addToCanvas/elementPushToCanvas.svelte';
	import AddMessage from './message/addMessage.svelte';

	import CanvasBackgroundImg from './canvasBackgroundImg.svelte';
</script>

<div class="flex justify-between items-center h-screen dark:bg-gray-800">
	<div class="drawer  z-50  dark:bg-gray-800">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div
			class="imgcontainer drawer-side   dark:bg-gray-800 
		  "
		>
			<!-- <label for="my-drawer" class="drawer-overlay" /> -->
			<ul class=" divide-y-2 w-full h-screen  bg-red-300 dark:bg-gray-600 text-sm text-white">
				<li class="p-2 ">
					<ElementPushToCanvas />
				</li>
				<li class="p-2 ">
					<AddMessage />
				</li>
				<li class="p-2">
					<Stickers />
				</li>
				<li class="p-2">
					<CanvasBackgroundImg />
				</li>
			</ul>
		</div>
	</div>
</div>
