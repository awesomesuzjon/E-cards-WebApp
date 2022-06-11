<script>
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';

	import {
		editRotateSticker,
		editStickerSize,
		editStickerPosition,
		editStickerOpacity
	} from '../../utils/editStickersonCanvas';
	import { deleteTarget } from '../../utils/editTextonCanvas';
	import Button from '../reusable/button.svelte';
</script>

<div
	class="absolute top-0 right-0 bg-gray-700 text-white text-sm invisible w-72 h-screen"
	id="stickerEditContainerId"
>
	<div tabindex="0" class="collapse">
		<input type="checkbox" />

		<div class="collapse-title flex justify-center text-xl font-medium">Stickers</div>
		<!-- add class="collapse-content" to make it collapsable-->
		<div id="collapse-contentIdStickers">
			<li class="p-0 list-none">
				<button class=" btn w-16   border-4 border-black " title="Delete" on:click={deleteTarget}>
					<MdDelete />
				</button>
			</li>

			<li class="p-4">
				<div class="flex  items-start justify-start  ">
					<h1 class="text-sm font-bold ">Position X:</h1>
					<input
						type="input"
						value="100"
						id="stickerPositionX"
						class="w-16 mr-2 border-2 text-black border-gray-500  h-auto text-sm font-bold dark:text-gray-800"
					/>

					<span class="text-sm font-bold ">Y:</span>
					<input
						type="input"
						value="100"
						id="stickerPositionY"
						class=" mr-2 border-2 text-black border-gray-500 w-16 h-auto x text-sm font-bold dark:text-gray-800"
					/>
				</div>
				<div class="flex flex-col mt-2">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="p-0 text-sm my-4" on:click={editStickerPosition}
						><Button><span> Enter </span></Button></a
					>

					<h1
						class="text-sm font-bold left flex items-center justify-center self-center"
						draggable="true"
					>
						Rotate:
					</h1>
					<input
						type="input"
						value="0"
						id="inputRotateSticker"
						class="flex items-center justify-center self-center mb-2  border-2 text-black border-gray-500 w-16 h-auto  text-sm font-bold dark:text-gray-800"
					/>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="p-0 text-sm my-4" on:click={editRotateSticker}
						><Button><span> Rotate Stickers </span></Button></a
					>
				</div>
			</li>

			<li class="p-3">
				<div class="flex  items-start truncate justify-start  ">
					<h1 class="text-sm font-bold " draggable="true">Height</h1>

					<input
						type="text"
						value="150"
						id="stickerHeight"
						class="truncate mx-1 border-2 text-black border-gray-500 w-16
						 h-auto  text-sm font-bold dark:text-gray-800"
					/>
					<h1 class="text-sm font-bold " draggable="true">Width</h1>

					<input
						type="text"
						value="150"
						id="stickerWidth"
						class=" mx-1 border-2 text-black border-gray-500 w-16 h-auto  text-sm font-bold dark:text-gray-800"
					/>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editStickerSize} class="p-0 text-sm my-4"><Button>Enter Size</Button></a>
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
						class="flex items-center justify-center self-center  mx-2 border-2 text-black border-gray-500 w-16 h-auto  text-sm font-bold dark:text-gray-800"
					/>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editStickerOpacity} class="p-0 text-sm"><Button>Enter</Button></a>
			</li>
		</div>
	</div>
</div>
<!-- </div> -->
