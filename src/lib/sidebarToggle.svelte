<script>
	import SaveTemplate from '$lib/saveTemplate.svelte';
	import KonvaAddText from '$lib/konvaAddText.svelte';
	import KonvaImgDrag from '$lib/konvaImgDrag.svelte';
	import { allowDrop, drag, drop } from '../routes/dragdropclone.svelte';
	import MdFullscreen from 'svelte-icons/md/MdFullscreen.svelte';
	import { openFullScreenFunc } from '../utils/openFullScreen';
	import { removeImgFunc } from '../utils/removeImg';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import { textStore } from '../stores/storeText';
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import Stickers from '$lib/stickers.svelte';
	import ElementPushToCanvas from '$lib/elementPushToCanvas.svelte';
	import EditSidebar from './editSidebar.svelte';

	
</script>

<div class="flex justify-between items-center">
	<div class="drawer  z-50 " style="width:10em;">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div
			class="imgcontainer drawer-side   
		  "
		>
			<label for="my-drawer" class="drawer-overlay" />
			<ul class=" divide-y-2 w-full bg-F6F0F0  text-sm text-white">
				<li class="p-4">
					<ElementPushToCanvas />
				</li>

				<li class="p-4">
					<Stickers />
				</li>

			

			</ul>
		</div>
	</div>

	<label
	for="my-drawer"
	class=" btn p-2 w-10 h-8 drawer-button    justify-left "
>
	<h6 class="text-sm w-6  h-auto p-1 focus:bg-red-500"><FaAngleRight /></h6>
</label>


	<div id="canvasContainer" class=" flex    items-center 	 h-full">
		
		<div
			on:drop={drop}
			on:dragover={allowDrop}
			id="canvasHolder"
			style="width:20em;height:450px"
			class="  text-black dark:text-white cursor-move   self-center  border-8 bg-gray-100  "
		>
			<div
				id="canvasImgContainer"
				class=" flex z-0 items-center justify-center relative  content-center ">

			
			</div>

			<Stage>
				
				<Layer>
					<!-- {#each $textStore as itemText, index} -->
					<div class="textDivCanvas ">
						<KonvaImgDrag />
						<KonvaAddText />
						
					</div>

					<!-- {/each} -->
				
				</Layer>
				
			</Stage>

			<!-- <button
				id="fullScreenBtn"
				on:click={openFullScreenFunc}
				class="btn bottom-0 right-0  absolute
     w-8 p-0 m-0 bg-transparent
     border-none hover:bg-transparent hover:border-none  text-black h-2"
			>
				<MdFullscreen />
			</button> -->
			
		</div>
		
		<EditSidebar />
	</div>
</div>
<p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>
<div>
	<button id="saveAsPdf" class="btn">Save as PDF</button>
	<button id="saveAsImg" class="btn">Save as Img</button>

	<SaveTemplate />
</div>
