<script>
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import { onMount } from 'svelte/internal';
	import {
		editRotateSticker,
		editStickerSize,
		editStickerPosition,
		editStickerOpacity
	} from '../../utils/editStickersonCanvas';
	import { deleteTarget } from '../../utils/editTextonCanvas';
	import Button from '../reusable/button.svelte';

	onMount(() => {
		document.getElementById('stickerPositionX').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editStickerPosition();
			}
		});
		document.getElementById('stickerPositionY').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editStickerPosition();
			}
		});
		document.getElementById('inputRotateSticker').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editRotateSticker();
			}
		});
		document.getElementById('stickerHeight').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editStickerSize();
			}
		});
		document.getElementById('stickerWidth').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editStickerSize();
			}
		});
		document.getElementById('opacityStickerInput').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editStickerOpacity();
			}
		});
	});
</script>

<div
	class="absolute top-0 right-0 mt-11  bg-gray-300 dark:bg-gray-600 text-black dark:text-white  invisible text-sm  w-72 h-screen"
	id="stickerEditContainerId"
>
	<div tabindex="0" class="collapse">

		<!-- add class="collapse-content" to make it collapsable-->
		<div id="collapse-contentIdStickers">
			<li class="p-0 list-none justify-start flex ml-4">
				<button
					class=" btn  hover:text-red-100 active:text-red-200 focus:text-red-200 bg-transparent border-none text-red-700 dark:text-white hover:border-1 hover:bg-transparent w-8 p-0   "
					title="Delete"
					on:click={deleteTarget}
				>
					<MdDelete />
				</button>
			</li>

			<li class="p-4 ">
				<h1 class="text-sm font-bold justify-start flex mr-2">Position</h1>
				<div class="flex  items-center justify-start  ">
					<h1 class="text-sm font-bold justify-start flex mr-2">X:</h1>

					<input
						type="input"
						value="100"
						on:enterkeyhint={editStickerPosition}
						id="stickerPositionX"
						class="w-16 h-8 mr-2 rounded border-2 text-black border-gray-500  text-sm font-bold dark:text-gray-800"
					/>

					<span class="text-sm font-bold mr-2">Y:</span>
					<input
						type="input"
						value="100"
						on:enterkeyhint={editStickerPosition}
						id="stickerPositionY"
						class=" mr-2 rounded border-2 text-black border-gray-500 w-16 h-8 x text-sm font-bold dark:text-gray-800"
					/>
					<!-- svelte-ignore a11y-missing-attribute -->

					<a class="p-0 text-sm  ml-3" on:click={editStickerPosition}
						><Button><span> Enter </span></Button></a
					>
				</div>
			</li>
			<li class="p-4  ">
				<div class="flex justify-start items-center ">
					<h1
						class=" mr-2 text-sm font-bold left flex items-center justify-center self-center"
						draggable="true"
					>
						Rotate:
					</h1>
					<input
						type="input"
						value="30"
						id="inputRotateSticker"
						on:enterkeyhint={editRotateSticker}
						class="flex mr-3 items-center rounded h-8 justify-center  mb-2  border-2 text-black border-gray-500 w-16  text-sm font-bold dark:text-gray-800"
					/>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="p-0 text-sm items-center flex" on:click={editRotateSticker}
						><Button><span> Rotate Stickers </span></Button></a
					>
				</div>
			</li>

			<li class="p-3">
				<div class="flex  items-center truncate justify-start  mb-4">
					<h1 class="text-sm font-bold mr-2" draggable="true">Height</h1>

					<input
						type="text"
						value="150"
						id="stickerHeight"
						on:enterkeyhint={editStickerSize}
						class="truncate mx-1 border-2 text-black border-gray-500 w-16
						 h-8  text-sm mr-4 font-bold rounded dark:text-gray-800"
					/>
					<h1 class="text-sm font-bold mr-2" draggable="true">Width</h1>

					<input
						type="text"
						value="150"
						on:enterkeyhint={editStickerSize}
						id="stickerWidth"
						class=" mx-1 border-2 h-8 rounded text-black border-gray-500 w-16  text-sm font-bold dark:text-gray-800"
					/>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editStickerSize} class="p-0 text-sm mt-4"><Button>Enter Size</Button></a>
			</li>

			<li class="p-3">
				<div class="flex justify-start items-center mb-4">
					<h1
						class="mb-2 text-sm font-bold left flex items-center justify-center self-center truncate"
						draggable="true"
					>
						Opacity
					</h1>

					<input
						type="text"
						id="opacityStickerInput"
						on:enterkeyhint={editStickerOpacity}
						class="flex h-8 rounded items-center mr-4 justify-center self-center  mx-2 border-2 text-black border-gray-500 w-16   text-sm font-bold dark:text-gray-800"
					/>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editStickerOpacity} class="p-0 text-sm"><Button>Enter</Button></a>
				</div>
			</li>
		</div>
	</div>
</div>
<!-- </div> -->
