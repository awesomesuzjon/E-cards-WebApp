<script>
	import StickerTable from '../lib/tables/stickerTable.svelte';
	import Button from '../lib/reusable/button.svelte';
	import AddStickersForm from '../lib/forms/addStickersForm.svelte';
</script>

<!-- The button to open modal -->
<div class="flex justify-end  mt-4 mr-5">
	<Button>
		<label for="my-modal-4" class=" modal-button">
			<span class="font-bold "> Add new Sticker +</span>
		</label>
	</Button>
</div>
<input type="checkbox" id="my-modal-4" class="modal-toggle " />
<label
	for="my-modal-4"
	class="modal cursor-pointer bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl bg-opacity-50  border border-gray-100"
>
	<label class="modal-box relative dark:bg-gray-600" for="">
		<AddStickersForm />
	</label>
</label>

<StickerTable />
