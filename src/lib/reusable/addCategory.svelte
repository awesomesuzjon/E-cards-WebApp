<!-- <script>
	import Button from '../lib/reusable/button.svelte';
</script>

<div class="flex justify-center items-center flex-col text-black dark:text-white">
	<form class="addCategoryForm">
		<div class="flex justify-start   mt-20 text-lg">
			<label for="name">
				<h1>Name</h1>
			</label>
			<span class="mx-4">:</span>
			<input
				type="text"
				name="name"
				placeholder="Enter Category Name"
				class="border-b-2 text-center text-black   bg-gray-300 hover:bg-gray-400  hover:no-underline "
			/>
		</div>

		<div class="flex justify-start   mt-10 text-lg">
			<label for="priority"> Priority</label>
			<span class="mx-4">:</span>
			<input
				type="number"
				name="priority"
				id="points"
				min="1"
				step="1"
				placeholder="Enter Priority"
				class="text-center text-black bg-gray-300 hover:bg-gray-400  hover:no-underline"
			/>
		</div>

		<div class="flex justify-start mt-8 text-sm">
			<label for="publish">Publish:</label>

			<input type="checkbox" name="publish" class="border-b-2 mx-1    hover:no-underline" />
		</div>

		<div class="flex justify-start mt-8  items-center text-lg">
			<label for="trending">Mark as Trending:</label>

			<input type="checkbox" class="border-b-2 mx-1   hover:no-underline" />
		</div>

		<div class="flex  mt-10   justify-center self-center items-center">
			
			<button class="btn my-2 flex-col flex">Add</button>

		</div>
	</form>
</div>

<div id="jsonDiv" class="bg-red-300 p-5 mt-8 mx-8" /> -->

<h2>Firebase Firestore</h2>
<div class="flex flex-col justify-center items-center text-sm ">
	<div class=" w-80">
		<form class="addCategoryForm text-lg">
			<label for="name">Name:</label>
			<input
				type="text"
				name="name"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline"
			/>
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline"
			/>
			<input type="checkbox" name="publish" class=" flex-col" />
			Publish

			<button class="btn my-2 flex justify-center center">Add Template</button>
		</form>
	</div>
</div>

<div id="jsonDiv" class="bg-red-500 p-5 m-8" />
