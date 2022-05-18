<script>
	import FontFamily from './fontFamily.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import { editFontSize, editTextColor,editRotateText, getCoordinatesByElementId } from '../utils/editTextonCanvas';
	import AlignText, {
		textLeftAlignFunction,
		textCenterAlignFunction,
		textRightAlignFunction
	} from './alignText.svelte';
	import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte';
	import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte';
	import FaAlignRight from 'svelte-icons/fa/FaAlignRight.svelte';

	let xaxis;
	let yaxis;
</script>

<div tabindex="0" class="collapse">
	<input type="checkbox" />
	<div class="collapse-title flex justify-center text-xl font-medium">
		Text
		<button class="w-8 h-auto truncate ">
			<MdKeyboardArrowDown />
		</button>
	</div>
	<div class="collapse-content">
		<li class="p-4">
			<div class="flex   ">
				<h1 class="text-sm font-bold justify-center mr-1">Position</h1>
				<h2 class="text-sm font-bold ">X:</h2>

				<input
					type="input"
					bind:value={xaxis}
					class=" mr-1 border-2 text-black border-gray-500 w-12 h-auto text-sm font-bold dark:text-gray-800"
				/>

				<span class="text-sm font-bold ">Y:</span>
				<input
					type="input"
					bind:value={yaxis}
					class=" mr-1 border-2 text-black border-gray-500 w-12 h-auto x text-sm font-bold dark:text-gray-800"
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
					class="text-sm font-bold left flex items-center justify-center self-center truncate"
					draggable="true"
				>
					Rotate:
				</h1>
				<input
					type="input"
					id="inputDegree"
					class="mb-2  border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<button class="btn w-full" on:click={editRotateText}>rotate</button>
			</div>
		</li>

		<li class="p-3">
			<div class="flex flex-col ">
				<h1
					class="text-sm font-bold left flex items-center justify-center self-center truncate"
					draggable="true"
				>
					Font-Size:
				</h1>

				<input
					type="text"
					id="input"
					class=" mx-2 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={editFontSize}
				class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center 
       self-center mt-2 w-full text-sm p-1">Enter</button
			>
		</li>

		<li class="p-3">
			<h1 class="text-sm font-bold truncate " draggable="true">Font-Family:</h1>
			<FontFamily />
		</li>

		<li class="p-2">
			<div class="flex  items-start justify-start  ">
				<h1 class="text-sm font-bold " draggable="true">Text-Color:</h1>
				<input
					type="color"
					id="colorInput"
					value="#e66465"
					class=" mx-2 border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800"
				/>
			</div>

			<button
				on:click={editTextColor}
				class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center 
       self-center mt-2 w-full text-sm p-1">Enter</button
			>
		</li>

		<!-- <li class="p-4">
			<div class="flex  flex-col items-start justify-start  ">
				<h1 class="text-sm font-bold mb-2" draggable="true">Align-Items:</h1>
				<div class="flex ">
					<button
						on:click={textLeftAlignFunction}
						class="bg-gray-800 mx-2 p-1 
               hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8"
					>
						<FaAlignLeft />
					</button>

					<button
						on:click={textCenterAlignFunction}
						class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8"
					>
						<FaAlignCenter />
					</button>

					<button
						on:click={textRightAlignFunction}
						class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8"
					>
						<FaAlignRight />
					</button>
				</div>
			</div>
		</li> -->
	</div>
</div>
