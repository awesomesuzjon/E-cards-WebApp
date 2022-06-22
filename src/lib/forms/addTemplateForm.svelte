<div class="flex flex-col justify-center items-center text-sm ">
	<div class=" w-80">
		<form class="addTemplateForm flex flex-col text-sm justify-center items-center ">
			<label for="title">Title:</label>
			<input
				type="text"
				name="title"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8 hover:no-underline"
			/>
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  h-8 hover:no-underline"
			/>
			<label for="tags">Tags:</label>
			<span class=" ml-8 italic bold text-sm">Separate tags with comma (,)</span>
			<input
				type="text"
				name="tags"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8  hover:no-underline"
			/>

			<label
				class=" my-2 label-optional label-optional-personal label-required-public"
				for="CategoryId"><h1>Add Category</h1></label
			>
			<select id="CategoryId" name="category" class=" text-sm h-8" required>
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
			<br />
			<div class="flex my-4">
				<input type="checkbox" name="publish" class="mx-2" />
				<span>Publish</span>
			</div>
			<button class="btn  flex-col flex">Add Template</button>
		</form>
		<form class="delete text-lg ">
			<label for="id">Document id:</label>
			<input
				type="text"
				name="id"
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8  hover:no-underline"
				required
			/>

			<button class="btn my-4">Delete</button>
		</form>
	</div>
</div>
