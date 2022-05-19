<script>
	import SaveTemplate from '$lib/saveTemplate.svelte';
	import KonvaAddText from '$lib/konvaAddText.svelte';
	import KonvaImgDragTest from '$lib/konvaImgDragTest.svelte';
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

	let someText;
	let files = [];
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
				<li class="p-4 divide-y-2">
					<div class="flex flex-col  items-start justify-center mt-2">
						<h1 class="text-sm font-bold  truncate mb-2   ">Select background template</h1>

						<input
							type="file"
							bind:files
							id="ImgFileUploadinCanvas"
							class="text-sm  z-10"
							accept="image/*"
							multiple
						/>
					</div>
					<button class="btn flex mt-2  " on:click={removeImgFunc}>Remove Bg Image</button>
				</li>

				<li class="p-4">
					<ElementPushToCanvas />
				</li>

				<li class="p-4">
					<Stickers />
				</li>
			</ul>
		</div>
	</div>

	<div id="canvasContainer" class=" flex    items-center 	 h-full">
		<label
			for="my-drawer"
			class=" btn p-0 w-10 h-8 drawer-button   justify-left  hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white"
		>
			<h6 class="text-sm w-6  h-auto p-1"><FaAngleRight /></h6>
		</label>

		<div
			on:drop={drop}
			on:dragover={allowDrop}
			id="canvasHolder"
			style="width:20em;height:450px"
			class="  text-black dark:text-white cursor-move   self-center  border-8 bg-gray-100  "
		>
			<div
				id="canvasImgContainer"
				class=" flex z-0 items-center justify-center relative  content-center "
			>
				{#each files as file}
					<img
						class="z-0 w-100% top-0 h-auto absolute"
						id="canvasImg"
						src={URL.createObjectURL(file)}
						alt=""
					/>
				{/each}
			</div>

			<Stage>
				{#each $textStore as itemText, index}
					<Layer>
						<div class="textDivCanvas ">
							<KonvaImgDragTest />
							<KonvaAddText someText={itemText} id={someText} />
						</div>
					</Layer>
				{/each}
			</Stage>

			<button
				id="fullScreenBtn"
				on:click={openFullScreenFunc}
				class="btn bottom-0 right-0  absolute
     w-8 p-0 m-0 bg-transparent
     border-none hover:bg-transparent hover:border-none  text-black h-2"
			>
				<MdFullscreen />
			</button>
		</div>
		<EditSidebar/>
	</div>
</div>
<p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>
<div>
	<SaveTemplate />
</div>
