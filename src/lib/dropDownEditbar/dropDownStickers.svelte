<script>
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import {
		editRotateSticker,
		editStickerSize,
		editStickerPosition,
		editStickerOpacity
	} from '../../utils/editStickersonCanvas';

	import Button from '../reusable/button.svelte';

	let xaxis;
	let yaxis;
</script>

<div tabindex="0" class="collapse">
	<input type="checkbox" />

	<div class="collapse-title flex justify-center text-xl font-medium">
		Stickers
		<button class="w-8">
			<MdKeyboardArrowDown />
		</button>
	</div>
	<div class="collapse-content">
		<li class="p-4">
			<div class="flex  items-start justify-start  ">
				<h1 class="text-sm font-bold ">Position X:</h1>
				<input
					type="input"
					value="100"
					id="stickerPositionX"
					class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto text-sm font-bold dark:text-gray-800"
				/>

				<span class="text-sm font-bold ">Y:</span>
				<input
					type="input"
					value="100"
					id="stickerPositionY"
					class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto x text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<div class="flex flex-col mt-2">
				<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editStickerPosition} ><Button >Enter</Button></a>

				<h1
					class="text-sm font-bold left flex items-start justify-start self-start"
					draggable="true"
				>
					Rotate:
				</h1>
				<input
					type="input"
					value="0"
					id="inputRotateSticker"
					class="mb-2  border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editRotateSticker} ><Button >Rotate Stickers</Button></a>
			</div>
		</li>

		<li class="p-3">
			<div class="flex  items-start justify-start  ">
				<h1 class="text-sm font-bold " draggable="true">Height</h1>

				<input
					type="text"
					value="150"
					id="stickerHeight"
					class=" mx-1 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<h1 class="text-sm font-bold " draggable="true">Width</h1>

				<input
					type="text"
					value="150"
					id="stickerWidth"
					class=" mx-1 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editStickerSize} ><Button >Enter Size</Button></a>
		</li>

		<li class="p-3">
			<div class="flex flex-col ">
				<h1
					class="text-sm font-bold left flex items-center justify-center self-center truncate"
					draggable="true"
				>
					Opacity(Between 0 and 1)
				</h1>

				<input
					type="text"
					id="opacityStickerInput"
					class=" mx-2 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editStickerOpacity} ><Button >Enter </Button></a>
		</li>
	</div>
</div>
