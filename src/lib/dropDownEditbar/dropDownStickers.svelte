<script>
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import {editRotateSticker,editStickerSize,editStickerPosition,editStickerOpacity} from '../../utils/editStickersonCanvas';
	


	let xaxis;
	let yaxis;
</script>

<div tabindex="0" class="collapse">
	<input type="checkbox" />

	<div class="collapse-title flex justify-center text-xl font-medium">
		Stickers
		<button class="w-8 h-auto truncate ">
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
				<button
					on:click={editStickerPosition}
					class="hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex mt-2 w-full text-sm p-1"
					>Enter</button
				>

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
				<button class="btn w-full" on:click={editRotateSticker}>Rotate Stickers</button>
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
			<button
			on:click={editStickerSize}
				class=" hover:text-gray-800 hover:no-underline 
           hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2
           w-full text-sm p-1">Enter Size</button
			>
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
			<button
				on:click={editStickerOpacity}
				class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center 
       self-center mt-2 w-full text-sm p-1">Enter</button
			>
		</li>
	</div>
</div>
