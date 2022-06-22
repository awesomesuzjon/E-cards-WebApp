<script>
	import Table from '../tables/table.svelte';
	import Button from '../reusable/button.svelte';
	import AddMessagesForm from '../forms/AddMessagesForm.svelte';
</script>

<svelte:head>
	<title>Messages</title>
</svelte:head>

<div class="flex justify-end  mt-4 mr-5">
	<Button>
		<label for="my-modal-4" class=" modal-button">
			<span class="font-bold "> Add new Message +</span>
		</label>
	</Button>
</div>
<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<AddMessagesForm/>
	</label>
</label>
<Table />
