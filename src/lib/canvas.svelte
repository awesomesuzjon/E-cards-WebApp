<script>
	import Editsidebar from './editsidebar.svelte';
	import KonvaAddText from '$lib/konvaAddText.svelte';
	import KonvaImgDragTest from '$lib/konvaImgDragTest.svelte';
	import { allowDrop, drag, drop } from '../routes/dragdropclone.svelte';
	import { draggableStoreSticker } from '../stores/storeStickers.js';
	import MdFullscreen from 'svelte-icons/md/MdFullscreen.svelte';
	import { openFullScreenFunc } from '../utils/openFullScreen';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import { textStore } from '../stores/storeText';
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import  files  from '$lib/sidebarToggle';
	let someText;
	let arraySticker = [];
	// $: reactiveArray = `${array}`;
	draggableStoreSticker.subscribe((sticker) => {
		arraySticker = sticker;
	});

	export let arrayText = [];
	textStore.subscribe((text) => {
		arrayText = text;
	});

	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

	//upload a new theme template from the local device
</script>

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
	<Editsidebar />
</div>
