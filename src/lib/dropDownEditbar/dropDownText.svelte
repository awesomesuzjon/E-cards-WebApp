<script>
	import FontFamily from '../addToCanvas/fontFamily.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import Button from '$lib/reusable/button.svelte';
	import {
		editFontSize,
		editElementPosition,
		editTextColor,
		editRotateText,
		editTextOpacity,
		StrokeWidth,
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
			<button class=" btn w-16   border-4 border-black " title="Delete" on:click={deleteTarget}>
				<MdDelete />
			</button>
		</li>

		<li class="p-4">
			<div>
				<h1
					class="mb-3 text-sm font-bold truncate  flex items-center justify-center self-center"
					draggable="true"
				>
					Font-Style:
				</h1>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontStyleBold} title="Bold"><Button >B</Button></a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a  on:click={editFontStyleItalic} title="Italic"><Button >i</Button></a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a  on:click={editFontStyleItalicBold} title="Italic Bold"><Button >I</Button></a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a  on:click={editFontStyleNormal} title="Normal"><Button>D</Button></a>
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
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontUndeline} title="underline" ><Button>ABC</Button></a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontLineThrough} title="line-through" class="line-through"><Button >ABC</Button></a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontNoUnderline} title="Default"><Button >ABC</Button></a>			

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

				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editTextColor} ><Button >Entering</Button></a>	
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
			
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontSize} ><Button >Enter</Button></a>	
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
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={StrokeWidth} ><Button >Enter</Button></a>	
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
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editTextOpacity} ><Button >Enter</Button></a>	
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
				<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editElementPosition} ><Button >Enter</Button></a>	

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
				<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={editRotateText} ><Button >Rotate</Button></a>	
			</div>
		</li>
	</div>
</div>
