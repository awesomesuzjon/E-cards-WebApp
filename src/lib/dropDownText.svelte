<script>
	import FontFamily from './fontFamily.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import {
		editFontSize,
		editElementPosition,
		editTextColor,
		editRotateText,
		editTextOpacity,
		StrokeWidth
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

		<li class="p-4">
			<div>
				<h1
					class="text-sm font-bold flex flex-row  items-start justify-center mb-1 "
					draggable="true"
				>
					Text-Color:
				</h1>
				<input
					type="color"
					id="colorInput"
					value="#e66465"
					class="  border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800"
				/>

				<button
					on:click={editTextColor}
					class="text-sm font-bold flex  justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50  rounded-lg  mt-2 "
					>Enter</button
				>
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
					value="50"
					id="input"
					class=" mx-2 border-2 text-black border-gray-500 w-10 h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={editFontSize}
				class="justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center  flex "
				>Enter</button
			>
		</li>

		<li class="p-3">
			<div class="flex flex-col ">
				<h1
					class="text-sm font-bold left flex items-center justify-center self-center truncate"
					draggable="true"
				>
					Stroke Width:
				</h1>

				<input
					type="text"
					value="2"
					id="strokeWidthInput"
					class=" mx-2 border-2 text-black border-gray-500 w-10 h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={StrokeWidth}
				class="justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center  flex "
				>Enter</button
			>
		</li>

		<li class="p-3">
			<h1 class="text-sm font-bold truncate " draggable="true">Font-Family:</h1>
			<FontFamily />
		</li>

		<li class="p-3">
			<div class="flex flex-col justify-center">
				<h1
					class="text-sm font-bold left flex items-center justify-center self-center truncate"
					draggable="true"
				>
					Opacity(Between 0 and 1)
				</h1>

				<input
					type="input"
					
					id="opacityInput"
					class="flex justify-center border-2 text-black border-gray-500  w-40 h-auto  text-sm font-bold dark:text-gray-800"
				/>
			</div>
			<button
				on:click={editTextOpacity}
				class="justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center  flex "
				>Enter</button
			>
		</li>

		<li class="p-4">
			<div class="flex   ">
				<h1 class="text-sm font-bold justify-center  flex">Position</h1>
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
					class="justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center  flex "
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
					class="mb-2  border-2 text-black border-gray-500 w-10 h-auto  text-sm font-bold dark:text-gray-800"
				/>
				<button
					class="justify-center cursor-pointer hover:text-gray-800 bg-gray-700 p-2 hover:no-underline w-32 hover:border-gray-800 hover:bg-white   btn-gray-50 center rounded-lg  mt-2 text-sm  items-center  flex "
					on:click={editRotateText}>rotate</button
				>
			</div>
		</li>
	</div>
</div>
