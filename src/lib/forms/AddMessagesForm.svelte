<script>
	import Button from '../reusable/button.svelte';
</script>

<div class="flex flex-col justify-center items-center text-sm my-4">
	<form class="addCategoryForm text-lg">
		<div class="my-2">
			<label for="name">Message:</label>
			<input
				type="text"
				name="name"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div class="my-4">
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

		<div class="flex my-4 items-center">
			<label
			class=" my-2 label-optional label-optional-personal label-required-public"
			for="CategoryId"><h1>Category:</h1></label
		>
		<select id="CategoryId" name="category" class=" text-sm h-8 mx-2" required>
			<option value="">Select a category</option>
			<option value="Birthday">Birthday</option>
			<option value="Love">Love</option>
			<option value="Friendship">Friendship</option>
			<option value="Thank You">Thank You</option>
			<option value="Get Well">Get Well</option>
			<option value="Congratulations">Congratulations</option>
			<option value="Festival">Festival</option>
			<option value="Other">Other...</option>
		</select>
		</div>

	

		<div class=" my-2">
			<input type="checkbox" name="publish" class="mx-2" />
			<span> Publish </span>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a> <Button>Add Message</Button> </a>
	</form>
</div>
