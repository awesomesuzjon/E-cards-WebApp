<h2>Firebase Firestore</h2>

<div class="flex   w-80">
<form class="add  flex-col justify-center w-64">
	<label for="title">Title:</label>
	<input type="text" name="title" required class="bg-gray-300 my-2" />
    <label for="tags">Tags:</label>
	<input type="text" name="tags" required class="bg-gray-300 mt-2 " />
    <label for="priority">Priority:</label>
	<input type="number" name="priority" required class="bg-gray-300 my-2"  />

	<button class="btn">Add</button>
</form>
</div>

<form class="delete flex flex-col w-80  justify-start ">
	<label for="id">Document id:</label>
	<input type="text" name="id" class="my-4 bg-gray-300" required />

	<button class="btn my-4">delete a book</button> 
</form>
