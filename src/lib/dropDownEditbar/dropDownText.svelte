<script>
	import FontFamily from '../addToCanvas/fontFamily.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import Button from '$lib/reusable/button.svelte';
	import FaUnderline from 'svelte-icons/fa/FaUnderline.svelte';
	import FaStrikethrough from 'svelte-icons/fa/FaStrikethrough.svelte';
	import TiRefresh from 'svelte-icons/ti/TiRefresh.svelte';
	import { onMount } from 'svelte/internal';
	import {
		editFontSize,
		editElementPosition,
		editTextColor,
		editRotateText,
		editTextOpacity,
		deleteTarget
	} from '../../utils/editTextonCanvas';

	import {
		editFontUndeline,
		editFontNoUnderline,
		editFontLineThrough
	} from '../../utils/editTextDecoration';
	import {
		editFontStyleBold,
		editFontStyleItalic,
		editFontStyleNormal,
		editFontStyleItalicBold
	} from '../../utils/editFontStyle';
	onMount(() => {
		document.getElementById('input').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editFontSize();
			}
		});
		document.getElementById('positionX').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editElementPosition();
			}
		});
		document.getElementById('positionY').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editElementPosition();
			}
		});
		document.getElementById('inputRotateDegree').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editRotateText();
			}
		});
		document.getElementById('opacityInput').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				editTextOpacity();
			}
		});
	});
</script>

<div
	class="absolute top-0 right-0 invisible dark:bg-gray-600 dark:text-white mt-11 h-screen bg-gray-300 text-md text-black    w-72 "
	id="textEditContainerId"
>
	<!-- <div class=" flex justify-end items-center text-sm  ">
		<button id="closeEditbarBtn" class="btn">close button here </button>
	</div> -->
	<!-- text toggle code by class name collapse-content -->
	<li class="p-0 list-none justify-start flex ml-4">
		<button
			class=" btn hover:text-red-100 active:text-red-200 dark:text-white focus:text-red-200 bg-transparent border-none text-red-700  hover:border-1 hover:bg-transparent w-8 p-0   "
			title="Delete"
			on:click={deleteTarget}
		>
			<MdDelete />
		</button>
	</li>

	<div class="collapse ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title justify-start flex  peer-checked:text-black">
			<h1
				class=" text-sm  font-bold truncate  flex items-center justify-center self-center"
				draggable="true"
			>
				Font-Style:
			</h1>
		</div>
		<div class="collapse-content   peer-checked:bg-white peer-checked:text-black">
			<li class="py-1 list-none flex items-center mt-3 justify-start ">

			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editFontStyleBold} class="p-0 text-sm mr-1" title="Bold"
				><Button>
					<span class="font-bold "> B</span>
				</Button></a
			>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editFontStyleItalic} class="p-0 text-sm mr-1" title="Italic"
				><Button>
					<span class=" italic  "> i</span>
				</Button></a
			>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editFontStyleItalicBold} class="p-0 text-sm mr-1" title="Italic Bold"
				><Button>
					<span class="font-bold italic"> I</span>
				</Button></a
			>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editFontStyleNormal} class="p-0 text-sm mr-1" title="Normal"
				><Button class="hover:bg-blue-700">
					<span> N </span>
				</Button></a
			>
		</li>
		</div>
	</div>

	<div class="collapse ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title justify-start flex  peer-checked:text-black">
			<h1
				class="text-sm font-bold truncate  flex items-center justify-center self-center"
				draggable="true"
			>
				Text-Decoration:
			</h1>
		</div>
		<div class="collapse-content peer-checked:bg-white peer-checked:text-black">
			<li class="py-1 list-none">
				<div class="items-center flex  justify-start mt-3">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontUndeline} class="p-0 x text-sm mr-1" title="underline">
						<Button>
							<div class="w-4 h-4 p-0">
								<FaUnderline />
							</div>
						</Button>
					</a>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontLineThrough} class="p-0 text-sm mr-1" title="line-through"
						><Button>
							<div class="w-4 h-4 p-0">
								<FaStrikethrough />
							</div>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontNoUnderline} class="p-0 text-sm mr-1" title="Default"
						><Button>
							<div class="w-4 h-4  ">
								<TiRefresh />
							</div>
						</Button></a
					>
				</div>
			</li>
		</div>
	</div>

	<li class="py-1 ml-4 list-none ">
		<div class="flex  items-center justify-start ">
			<h1
				class="text-sm font-bold   flex items-center justify-center self-center truncate"
				draggable="true"
			>
				Font-Color
			</h1>
			<input
				type="color"
				id="colorInput"
				value="colorInput"
				class="my-4 h-9 flex items-center rounded justify-center self-center mx-2 border-2 text-black border-gray-500 w-16 dark:text-gray-800"
			/>

			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="p-0 text-sm truncate" on:click={editTextColor}> <Button>Enter</Button></a>
		</div>
	</li>

	<li class="py-1 list-none ml-4">
		<div class="flex items-center justify-start ">
			<h1 class="text-sm font-bold   truncate" draggable="true">Font-Size:</h1>

			<input
				type="text"
				value="50"
				id="input"
				on:enterkeyhint={editFontSize}
				class=" flex items-center justify-center rounded self-center mx-2 border-2 text-black border-gray-500 w-16 h-8 mb-2 text-sm font-bold dark:text-gray-800"
			/>
		</div>
	</li>

	<li class="py-1 my-2 flex justify-start ml-4 items-center ">
		<h1 class="text-sm font-bold truncate " draggable="true">Font-Family:</h1>
		<FontFamily />
	</li>

	<li class="py-1 list-none">
		<div class=" ml-4 flex items-center justify-start">
			<h1
				class="text-sm mr-2 font-bold left flex items-center justify-center self-center truncate"
				draggable="true"
			>
				Opacity:
			</h1>

			<input
				type="input"
				id="opacityInput"
				on:enterkeyhint={editTextOpacity}
				class=" flex items-center justify-center rounded self-center border-2 text-black border-gray-500  w-12 h-8  text-sm font-bold dark:text-gray-800"
			/>
		</div>
	</li>

	<li class="p-1 mt-3 list-none">
		<div class="flex items-center justify-start  ml-4 ">
			<h1 class="text-sm font-bold   mr-1 flex">Position</h1>
			<h2 class="text-sm font-bold mr-2">X:</h2>

			<input
				type="input"
				value="100"
				id="positionX"
				on:enterkeyhint={editElementPosition}
				class=" mr-1 border-2 text-black rounded border-gray-500 w-12 h-8 text-sm font-bold dark:text-gray-800"
			/>

			<span class="text-sm font-bold mr-1">Y:</span>
			<input
				type="input"
				value="100"
				id="positionY"
				on:enterkeyhint={editElementPosition}
				class=" mr-1 border-2 text-black rounded border-gray-500 w-12 h-8 x text-sm font-bold dark:text-gray-800"
			/>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editElementPosition} class="p-0 text-sm"><Button>Enter</Button></a>
		</div>
		<div class="flex items-center ml-4 justify-start mt-3">
			<h1 class="text-sm font-bold   mr-1 flex">Rotate:</h1>

			<input
				type="input"
				id="inputRotateDegree"
				on:enterkeyhint={editRotateText}
				class=" flex items-center justify-center  self-center my-2 mr-2 border-2 text-black border-gray-500 w-16 h-8 rounded text-sm font-bold dark:text-gray-800"
			/>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editRotateText} class="p-0 text-sm"><Button>Rotate</Button></a>
		</div>
	</li>
</div>
