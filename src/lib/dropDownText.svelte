<script>
	import FontFamily from './fontFamily.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import {
		editFontSize,
		editElementPosition,
		editTextColor,
		editRotateText,
		editTextOpacity
	} from '../utils/editTextonCanvas';
	import {
		editFontUndeline,
		editFontNoUnderline,
		editFontLineThrough
	} from '../utils/editTextDecoration';
	import {
		editFontStyleBold,
		editFontStyleItalic,
		editFontStyleNormal,
		editFontStyleItalicBold
	} from '../utils/editFontStyle';
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
			<div>
				<h1
					class="mb-3 text-sm font-bold truncate  flex items-center justify-center self-center"
					draggable="true"
				>
					Font-Style:
				</h1>
				<button
					on:click={editFontStyleBold}
					class="w-8 font-extrabold mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Bold">B</button
				>
				<button
					on:click={editFontStyleItalic}
					class="w-8 	italic mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Italic"
					>i
				</button>
				<button
					on:click={editFontStyleItalicBold}
					class="w-8 font-bold	italic mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Italic Bold"
					>I
				</button>
				<button
					on:click={editFontStyleNormal}
					class="w-8  border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Normal"
					>N
				</button>
			</div>
		</li>

		<li class="p-4">
			<div>
				<h1
					class="mb-3 text-sm font-bold truncate  flex items-center justify-center self-center"
					draggable="true"
				>
					Text-Decoration:
				</h1>
				<button
					on:click={editFontUndeline}
					class="w-8 underline  mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Underline">ABC</button
				>
				<button
					on:click={editFontLineThrough}
					class="w-8 line-through  mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Line-through">ABC</button
				>
				<button
					on:click={editFontNoUnderline}
					class="w-8 no-underline  mr-2 border-4 border-black bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white"
					title="Default">ABC</button
				>
			</div>
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
					value="50"
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
					id="opacityInput"
					class=" mx-2 border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={editTextOpacity}
				class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center 
       self-center mt-2 w-full text-sm p-1">Enter</button
			>
		</li>

		<li class="p-4">
			<div class="flex   ">
				<h1 class="text-sm font-bold justify-center mr-1">Position</h1>
				<h2 class="text-sm font-bold ">X:</h2>

				<input
					type="input"
					value="100"
					id="positionX"
					class=" mr-1 border-2 text-black border-gray-500 w-12 h-auto text-sm font-bold dark:text-gray-800"
				/>

				<span class="text-sm font-bold ">Y:</span>
				<input
					type="input"
					value="100"
					id="positionY"
					class=" mr-1 border-2 text-black border-gray-500 w-12 h-auto x text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<div class="flex flex-col mt-2">
				<button
					on:click={editElementPosition}
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
					id="inputRotateDegree"
					class="mb-2  border-2 text-black border-gray-500 w-full h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<button class="btn w-full" on:click={editRotateText}>rotate</button>
			</div>
		</li>
	</div>
</div>
