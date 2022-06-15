<script>
	import Button from '../lib/reusable/button.svelte';
</script>

<div class="flex justify-center items-center flex-col text-black dark:text-white">
	<div class="flex justify-start   mt-20 text-lg">
		<h1>Name</h1>
		<span class="mx-4">:</span>
		<input
			type="text"
			placeholder="Enter Category Name"
			class="border-b-2 text-center text-black   bg-gray-300 hover:bg-gray-400  hover:no-underline "
		/>
	</div>

	<div class="flex justify-start   mt-10 text-lg">
		<h1>Priority</h1>
		<span class="mx-4">:</span>
		<input
			type="number"
			id="points"
			name="points"
			min="1"
			step="1"
			placeholder="Enter Priority"
			class="text-center text-black bg-gray-300 hover:bg-gray-400  hover:no-underline"
		/>
	</div>

	<div class="flex justify-start mt-8  text-lg">
		<input type="checkbox" class="border-b-2 mx-1   hover:no-underline" />
		Publish
	</div>

	<div class="flex justify-start mt-8  items-center text-lg">
		<input type="checkbox" class="border-b-2 mx-1   hover:no-underline" />
		Mark as Trending
	</div>
</div>

<div class="flex  mt-10   justify-center self-center items-center">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a class="p-0 text-sm mx-8" title="Italic"
		><Button>
			<span class=" save "> Save</span>
		</Button></a
	>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a class="p-0 text-sm" title="Italic"
		><Button>
			<span class=" save "> Discard</span>
		</Button></a
	>
</div>
