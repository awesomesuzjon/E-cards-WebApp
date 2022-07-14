<script>
	import Button from '../reusable/button.svelte';
	import AddMessagesForm from '../forms/AddMessagesForm.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	import Pagination from '../reusable/pagination.svelte';
	import { paginationMessageStore } from '../../stores/paginationStore';
	var messageArr = [];
	onMount(() => {
		// fetch(`${globalUrl}/message/show-all-message`).then((res) => {
		fetch('https://fakestoreapi.com/products').then((res) => {
			res.json().then((data) => {
				// messageArr = data?.allMessageList ?? [];
				messageArr = data;
				paginationMessageStore.set(messageArr);
			});
		});
	});
	//pagination setup
	var messages = [];
	paginationMessageStore.subscribe((paginationMessageStore) => {
		messages = paginationMessageStore;
	});
	// pagination code
	let paginatedItems = [];
	$: paginatedItems;
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
	<label class="modal-box relative dark:bg-gray-600" for="">
		<AddMessagesForm />
	</label>
</label>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 dark:bg-gray-800">
				<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Message</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Category</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Mark as Trending</th>

			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		<!-- {#each messageArr as item} -->
		{#each paginatedItems as item}
			<tr>
				<th>
					<!-- <label>
						<input type="checkbox" class="checkbox" />
					</label> -->
				</th>
				<td class=" px-8 py-2 ">{item.id}</td>
				<td class=" px-8 py-2">{item.message}</td>
				<td class=" px-8 py-2">{item.category}</td>

				<td class=" px-8 py-2">{item.publish}</td>
				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.trending}</td>

				<td>
					<div class="flex justify-around items-center mb-2 list-none">
						<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move ">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a
								title="Delete"
								on:click={() => {
									var deleteItemId = item.id;
									var deleteItemName = item.name;
									console.log(deleteItemId, 'is my id');
									async function deleteTemplate(id) {
										// post:"/set-trending/{name}/{prev_status}",

										axios
											.delete(`${globalUrl}/message/delete/${deleteItemId}`, {})
											.then(function (response) {
												console.log(response);
												console.log(deleteItemId, 'this is del id');
											})
											.catch(function (error) {
												console.log(error);
											});
									}
									deleteTemplate(deleteItemId);
									console.log(deleteItemId, 'deleted');
								}}
							>
								<MdDelete /></a
							>
						</li>

						<li class="  text-sm   w-4">
							<!-- svelte-ignore a11y-missing-attribute -->

							<a
								title="Mark as Trending"
								on:click={() => {
									var messageId = item.id;
									var id = item.id;
									var isTrending = item.trending;
									console.log(isTrending);
									console.log(id);

									async function setTrendingTemplate() {
										// post:"/set-trending/{name}/{prev_status}",
										axios
											.post(`${globalUrl}/message/set-trending/${messageId}/${isTrending}`, {})
											.then(function (response) {
												console.log(response);
											})
											.catch(function (error) {
												console.log(error);
											});
									}
									setTrendingTemplate();
								}}
							>
								<DiMarkdown />
							</a>
						</li>
					</div>
				</td>
			</tr>
		{/each}
	</table>
</div>
<div class="mx-5">
	<Pagination items={messages} bind:paginatedItems />
</div>
