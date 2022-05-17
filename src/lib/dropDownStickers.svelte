<script>
	import FontFamily from './fontFamily.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import { editTextStyles, getCoordinatesByElementId, rotateText } from './changefontsize.svelte';
	import AlignText, {
		textLeftAlignFunction,
		textCenterAlignFunction,
		textRightAlignFunction
	} from './alignText.svelte';
	import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte';
	import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte';
	import FaAlignRight from 'svelte-icons/fa/FaAlignRight.svelte';
	import Colorpicker, {
		changeCanvasBgColorFunc,
		revertCanvasBgColorFunc
	} from './colorpicker.svelte';
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
					bind:value={xaxis}
					class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto text-sm font-bold dark:text-gray-800"
				/>

				<span class="text-sm font-bold ">Y:</span>
				<input
					type="input"
					bind:value={yaxis}
					class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto x text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<div class="flex flex-col mt-2">
				<button
					on:click={() =>
						getCoordinatesByElementId('box', (x, y) => {
							xaxis = x;
							yaxis = y;
						})}
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
					id="inputRotate"
					class="mb-2  border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<button class="btn w-full" on:click={rotateText}>rotate</button>
			</div>
		</li>

		<li class="p-3">
			<div class="flex  items-start justify-start  ">
				<h1 class="text-sm font-bold " draggable="true">Size:</h1>

				<input
					type="text"
					id="input"
					class=" mx-2 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={editTextStyles}
				class=" hover:text-gray-800 hover:no-underline 
           hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2
           w-full text-sm p-1">Enter</button
			>
		</li>
	</div>
</div>
