<script>
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import Pagination from '../reusable/pagination.svelte';
	import { paginationStickerStore } from '../../stores/paginationStore';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { globalUrl } from '../../utils/urls';
	import Spinner from 'svelte-spinner';

	//loading spinner
	let isPageLoaded = false;
	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 2000);
	});

	export let stickerArr = [];
	onMount(() => {
		//grpc backend data
		fetch(`${globalUrl}sticker/show-all-stickers`).then((res) => {
			res.json().then((data) => {
				stickerArr = data?.allStickerList ?? [];
				paginationStickerStore.set(stickerArr);
			});
		});
	});
	//initialiaze an array to store stickers from backend
	let paginatedItems = [];
	$: paginatedItems;
	let stickers = [];
	paginationStickerStore.subscribe((paginationStickerStore) => {
		stickers = paginationStickerStore;
	});
</script>

{#if !isPageLoaded}
	<div class="text-lg  spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
	<div class="flex mt-4 ">
		<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-white text-black  ">
			<tr id="templatesTableRow" class="2xl:text-4xl">
				<th class="bg-red-700 dark:bg-gray-800 ">
					<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
				</th>
				<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 2xl:text-4xl "
					>Id</th
				>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Sticker Name</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Priority</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Category</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Created on</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Publish</th>
				<th class="bg-red-700  text-white py-2 dark:bg-gray-800">Preview</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800">Action</th>
			</tr>
			<!-- {#each paginatedItems as item} -->
			{#each paginatedItems as item, i}
				<tr class="2xl:text-3xl">
					<th>
						<!-- <label>
						<input type="checkbox" class="checkbox" />
					</label> -->
					</th>
					<td class=" px-8 py-2 ">{item.id}</td>
					<td class=" px-8 py-2">{item.name}</td>

					<td class=" px-8 py-2">{item.priority}</td>
					<td class=" px-8 py-2">{item.category}</td>
					<td class=" px-8 py-2">{new Date(Number(item.timestamp)).toDateString()}</td>

					<td class=" px-8 py-2">{item.publish}</td>
					<td class="justify-center flex ml-0 items-center py-2">
						<!-- on click of image open image modal -->
						<div class="flex justify-end    2xl:text-4xl">
							<label for={i} class=" modal-button">
								<img
									class="w-4 2xl:w-12 h-auto flex justify-center  items-center"
									src={item.url}
									alt={item.name}
								/>
							</label>
						</div>

						<input type="checkbox" id={i} class="modal-toggle" />
						<label
							for={i}
							class="modal cursor-pointer bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl bg-opacity-50  border border-gray-100"
						>
							<label class="modal-box relative" for="">
								<img
									class="w-full h-auto flex justify-center items-center "
									alt={item.name}
									src={item.url}
								/>
							</label>
						</label>
						<!-- bb -->
					</td>
					<td>
						<div class="flex justify-center items-center mb-2 list-none">
							<li class=" text-sm  w-4 mx-4 hover:bg-gray-300 p-0 cursor:move 2xl:w-10">
								<!-- svelte-ignore a11y-missing-attribute -->
								<!-- <a
								title="Delete"
								on:click={//delete row on table through delete button
								(e) => {
									e.stopPropagation();

									const docRef = doc(db, 'Stickers', item.Id);
									deleteDoc(docRef);
								}}
							>
								<MdDelete /></a
							> --><a
									title="Delete"
									on:click={() => {
										let stickerItemId = item.id;
										let deleteItemName = item.name;
										async function deleteSticker(id) {
											let newArr = [];
											let newArrIndex = '';

											axios
												.delete(`${globalUrl}sticker/delete/${stickerItemId}`, {})
												.then(function (response) {
													paginationStickerStore.subscribe((paginationStickerStore) => {
														newArr = paginationStickerStore;
														newArrIndex = newArr.findIndex((item) => item.id === stickerItemId);
													});
													newArr.splice(newArrIndex, 1);

													paginationStickerStore.set(newArr);
												});
										}
										deleteSticker(stickerItemId);
									}}
								>
									<MdDelete /></a
								>
							</li>
							<!-- <div class="flex justify-around items-center"> -->

							<!-- </div> -->
						</div>
						<!-- </ul>
							</div>
						</div>
					</div> -->
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<div class="mx-5">
		<Pagination items={stickers} bind:paginatedItems />
	</div>
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 20%;
		left: 50%;
	}
</style>
