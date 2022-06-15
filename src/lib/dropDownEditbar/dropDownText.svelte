<script>
	import FontFamily from '../addToCanvas/fontFamily.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import Button from '$lib/reusable/button.svelte';
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
</script>

<div
	class="absolute top-0 right-0  bg-red-300 text-md text-white invisible w-72 "
	id="textEditContainerId"
>
	<div tabindex="0" class="collapse">
		<div class="collapse-title flex justify-center text-xl font-medium">
			<button class=" h-12 truncate 	flex justify-center ml-8 w-24" id="editTextPanelId"> Texts </button>
		</div>
		<!-- text toggle code by class name collapse-content -->
		<div id="collapse-contentId">
			<li class="p-0 list-none">
				<button
					class=" btn bg-white border-red-700 text-red-700 hover:border-1 hover:bg-transparent w-16   "
					title="Delete"
					on:click={deleteTarget}
				>
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
					<a on:click={editFontStyleBold} class="p-0 text-sm" title="Bold"
						><Button>
							<span class="font-bold "> B</span>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontStyleItalic} class="p-0 text-sm" title="Italic"
						><Button>
							<span class=" italic "> i</span>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontStyleItalicBold} class="p-0 text-sm" title="Italic Bold"
						><Button>
							<span class="font-bold italic"> I</span>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontStyleNormal} class="p-0 text-sm" title="Normal"
						><Button class="hover:bg-blue-700">
							<span> N </span>
						</Button></a
					>
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
					<a on:click={editFontUndeline} class="p-0 text-sm" title="underline"
						><Button>
							<span class="underline "> ABC</span>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontLineThrough} class="p-0 text-sm" title="line-through"
						><Button>
							<span class="line-through "> ABC</span>
						</Button></a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editFontNoUnderline} class="p-0 text-sm" title="Default"
						><Button>
							<span> ABC</span>
						</Button></a
					>
				</div>
			</li>

			<li class="p-4">
				<div class="flex flex-col">
					<h1
						class="text-sm font-bold  flex items-center justify-center self-center truncate"
						draggable="true"
					>
						Font-Color
					</h1>
					<input
						type="color"
						id="colorInput"
						value="#e66465"
						class="my-4 flex items-center justify-center self-center mx-2 border-2 text-black border-gray-500 w-16 dark:text-gray-800"
					/>

					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="p-0 text-sm truncate" on:click={editTextColor}> <Button>Enter</Button></a>
				</div>
			</li>

			<li class="p-3">
				<div class="flex flex-col ">
					<h1
						class="text-sm font-bold  flex items-center justify-center self-center truncate"
						draggable="true"
					>
						Font-Size:
					</h1>

					<input
						type="text"
						value="50"
						id="input"
						class=" flex items-center justify-center self-center mx-2 border-2 text-black border-gray-500 w-16 h-auto  text-sm font-bold dark:text-gray-800"
					/>
				</div>

				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editFontSize} class="p-0 text-sm"><Button>Enter</Button></a>
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
						class=" flex items-center justify-center self-center border-2 text-black border-gray-500  w-40 h-auto  text-sm font-bold dark:text-gray-800"
					/>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={editTextOpacity} class="p-0 text-sm"><Button>Enter</Button></a>
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
					<a on:click={editElementPosition} class="p-0 text-sm"><Button>Enter</Button></a>

					<h1
						class="text-sm font-bold left flex items-center justify-center self-center truncate"
						draggable="true"
					>
						Rotate:
					</h1>
					<input
						type="input"
						id="inputRotateDegree"
						class=" flex items-center justify-center self-center mb-2  border-2 text-black border-gray-500 w-16 h-auto  text-sm font-bold dark:text-gray-800"
					/>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click={editRotateText} class="p-0 text-sm"><Button>Rotate</Button></a>
				</div>
			</li>
		</div>
	</div>
</div>
