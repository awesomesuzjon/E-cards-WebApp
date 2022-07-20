<script>
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import { canvasBgStore } from '../../stores/canvasColor';
	import Button from '$lib/reusable/button.svelte';
</script>

<div tabindex="0" class="collapse">
	<input type="checkbox" />
	<div class="collapse-title flex justify-center text-xl font-medium">
		BackGround
		<button class="w-8 h-auto truncate ">
			<MdKeyboardArrowDown />
		</button>
	</div>
	<div class="collapse-content">
		<li class="p-1">
			<div class="flex  items-start justify-start  ">
				<h1 class="text-sm font-bold p-0">Change BgColor:</h1>
				<input
					type="color"
					id="colorBginput"
					value="#e66465"
					on:change={(color) => {
						canvasBgStore.set(document.getElementById('colorBginput').value);
					}}
					class=" mx-2 border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800"
				/>
			</div>

			<a
				class="mt-4"
				on:click={() => {
					let canvasBgValue = '#F3F4F6';
					canvasBgStore.set(canvasBgValue);
				}}><Button>Revert</Button></a
			>
		</li>
	</div>
</div>
