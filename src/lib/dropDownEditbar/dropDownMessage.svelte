<script>
	import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte';
	import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte';
	import FaAlignRight from 'svelte-icons/fa/FaAlignRight.svelte';
	import {
		textLeftAlignFunction,
		textCenterAlignFunction,
		textRightAlignFunction
	} from '../../utils/alignText';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import FontFamily from '../addToCanvas/fontFamily.svelte';
	import Button from '../reusable/button.svelte';

	let xaxis;
	let yaxis;
</script>

<div
	id="messageEditContainerId"
	class="absolute top-0 right-0 bg-red-300 text-white text-sm invisible w-72 h-screen"
>
	<input type="checkbox" />
	<div class="collapse-title flex justify-center text-xl font-medium">
		Messages
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
				<Button>Enter</Button>

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
				<Button>rotate</Button>
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
			<Button>Enter</Button>
		</li>

		<li class="p-3">
			<h1 class="text-sm font-bold truncate " draggable="true">Font-Family:</h1>
			<FontFamily />
		</li>

		<li class="p-4">
			<div class="flex  flex-col items-start justify-start  ">
				<h1 class="text-sm font-bold mb-2" draggable="true">Align-Items:</h1>
				<div class="flex ">
					<button
						on:click={textLeftAlignFunction}
						class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8"
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
		</li>
	</div>
</div>
