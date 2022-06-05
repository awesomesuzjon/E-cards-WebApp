<h2>Firebase Firestore</h2>
<div class="flex flex-col justify-center items-center ">
	<div class=" w-80">
		<form class="add text-lg">
			<label for="title">Title:</label>
			<input type="text" name="title" required class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline" />
			<label for="priority">Priority:</label>			   
			<input type="number" name="priority" required class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline" />
			 <label for="tags"  >Tags:</label>
				  <span class=" ml-8 italic bold text-sm">Separate tags with comma (,)</span>
			<input type="text" name="tags" required class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline" />
			
				<label class=" my-4 label-optional label-optional-personal label-required-public" for="CategoryId"><h1>Add Category </h1></label>
				<span class="mx-5">:</span>                
				<select id="CategoryId" name="CategoryId" class="my-2">
									<option value="">Select a category</option>
									<option value="2">Birthday</option>
									<option value="3">Love</option>
									<option value="4">Friendship</option>
									<option value="5">Thank You</option>
									<option value="6">Anniversary</option>
									<option value="7">Get Well</option>
									<option value="8">Congratulations</option>
									<option value="9">Festival</option>
									<option value="1">Everyday</option>
									<option value="10">Other...</option>
								</select>
							<br/>
								<button class="btn my-2 ">Add</button>
							</form>
		<form class="delete text-lg ">
			<label for="id">Document id:</label>
			<input type="text" name="id" class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  hover:no-underline" required />

			<button class="btn my-4">delete a book</button>
		</form>
	</div>
</div>
