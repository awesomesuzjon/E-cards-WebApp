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
	import Spinner from 'svelte-spinner';

	let messageArr = [];
	//loading spinner
	let isPageLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 2000);
	});
	onMount(() => {
		fetch(`${globalUrl}/message/show-all-message`).then((res) => {
			// fetch('https://fakestoreapi.com/products').then((res) => {
			res.json().then((data) => {
				messageArr = data?.allMessageList ?? [];
				// messageArr = data;
				paginationMessageStore.set(messageArr);
			});
		});
	});
	//pagination setup
	let paginatedItems = [];
	$: paginatedItems;
	let messages = [];
	paginationMessageStore.subscribe((paginationMessageStore) => {
		messages = paginationMessageStore;
	});
</script>

<svelte:head>
	<title>Messages</title>
</svelte:head>
{#if !isPageLoaded}
	<div class="text-lg spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
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
			<tr id="templatesTableRow" class="2xl:text-3xl">
				<th class="bg-red-700 dark:bg-gray-800">
					<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
				</th>
				<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Message</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Category</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>

				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
			</tr>

			<!-- {#each messageArr as item} -->
			{#each paginatedItems as item}
				<tr class="2xl:text-3xl">
					<th>
						<!-- <label>
						<input type="checkbox" class="checkbox" />
					</label> -->
					</th>
					<td class=" px-8 py-2 ">{item.id}</td>
					<td class=" px-8 py-2">{item.message}</td>
					<td class=" px-8 py-2">{item.category}</td>

					<td class=" px-8 py-2">{item.trending}</td>

					<td>
						<div class="flex justify-around items-center mb-2 list-none">
							<li
								class=" text-sm  w-4 hover:bg-gray-300 active:bg-red-400 focus:bg-red-500 p-0 cursor:move 2xl:w-10  "
							>
								<!-- svelte-ignore a11y-missing-attribute -->
								<a
									title="Delete"
									on:click={() => {
										let deleteItemId = item.id;
										deleteItemId, 'is my id';
										async function deleteTemplate(id) {
											let newArr = [];
											let newArrIndex = '';

											axios
												.delete(`${globalUrl}/message/delete/${deleteItemId}`, {})
												.then(function (response) {
													paginationMessageStore.subscribe((paginationMessageStore) => {
														newArr = paginationMessageStore;
														newArrIndex = newArr.findIndex((item) => item.id === deleteItemId);
													});
													newArr.splice(newArrIndex, 1);
													paginationMessageStore.set(newArr);
												});
										}
										deleteTemplate(deleteItemId);
									}}
								>
									<MdDelete /></a
								>
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
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 20%;
		left: 50%;
	}
</style>
