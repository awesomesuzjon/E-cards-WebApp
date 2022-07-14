<script>
	import AddCategoryForm from '../lib/forms/addCategoryForm.svelte';
	import Button from '../lib/reusable/button.svelte';
import CategoryTable from '../lib/tables/categoryTable.svelte';
</script>

<svelte:head>
	<title>Category</title>
</svelte:head>

<div class="flex justify-end  mt-4 mr-5 ">
	<Button>
		<label for="my-modal-4" class=" modal-button ">
			<span class="font-bold "> Add a new Category +</span>
		</label>
	</Button>
</div>
<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
	<label class="modal-box relative dark:bg-gray-600" for="">
		<AddCategoryForm />
	</label>
</label>

<CategoryTable/>