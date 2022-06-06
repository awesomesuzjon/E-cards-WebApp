<script>
	// import '../lib/reusable/button.svelte';
</script>

<div class="flex justify-start  pl-10 mt-20 text-lg">
	<h1>Add Name of Category</h1>
	<span class="mx-10">:</span>
	<input type="text" class="border-b-2 ml-24 hover:bg-gray-200  hover:no-underline" />
</div>



<div class="flex justify-start  pl-10 mt-20 text-lg">
	<h1>Priority</h1>
	<span class="mx-10">:</span>
	<input
		type="number"
		id="points"
		name="points"
		min="1"
		step="1"
		class="bg-gray-300  ml-24 hover:bg-gray-200  hover:no-underline"
	/>
</div>



<div class="flex justify-start  pl-10 mt-20 text-lg">

	<input type="checkbox" class="border-b-2 mx-4 hover:bg-gray-200  hover:no-underline" />
  Publish 
</div>

<div class="flex justify-start  pl-10 mt-20 text-lg">

	<input type="checkbox" class="border-b-2 mx-4 hover:bg-gray-200  hover:no-underline" />
  Mark as Trending 
</div>


<div class="flex  mt-8   justify-center self-center items-center">
	<button class="btn mx-4 my-2"> Save </button>

	<button class="btn my-2"> Discard </button>
</div>
