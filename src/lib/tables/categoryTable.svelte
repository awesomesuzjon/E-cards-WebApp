<script>
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import Pagination from '../reusable/pagination.svelte';
	import { paginationCategoryStore } from '../../stores/paginationStore';
	import Spinner from 'svelte-spinner';
	import axios from 'axios';
	let responseMessage = '';
	let responseStatus = '';
	//from backend grpc
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	import { timestamp } from 'rxjs';
	//loading spinner
	let isPageLoaded = false;
	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 2000);
	});

	export let categoryArr = [];
	onMount(() => {
		fetch(`${globalUrl}category/show-all-category`).then((res) => {
			res.json().then((data) => {
				categoryArr = data?.categories ?? [];
				paginationCategoryStore.set(categoryArr);
			});
		});
	});

	///pagination code
	let paginatedItems = [];
	$: paginatedItems;
	let category = [];
	paginationCategoryStore.subscribe((paginationCategoryStore) => {
		category = paginationCategoryStore;
	});

	function timeStampFunc() {
		let timestamp = item.timestamp;
		let date = new Date(timestamp);
		console.log(date.getTime());
		console.log(date);
	}
</script>

{#if !isPageLoaded}
	<div class="text-lg spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
	<div class="flex mt-4 ">
		<table
			class="shadow-lg text-sm w-full mx-5  items-center bg-white  text-black dark:bg-gray-800 dark:text-white  "
		>
			<tr id="templatesTableRow" class="2xl:text-3xl">
				<th class="bg-red-700 dark:bg-gray-800" />
				<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Category Name</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Added on:</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Mark as Trending</th>
				<th class="bg-red-700  text-white px-8  dark:bg-gray-800 items-center">Preview</th>

				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
			</tr>
			<!-- {#each categoryArr as item} -->
			{#each paginatedItems as item, i}
				<tr class="2xl:text-3xl">
					<th />
					<td class=" px-8 py-2 ">{item.id}</td>
					<td class=" px-8 py-2">{item.name}</td>
					<td class=" px-8 py-2">{item.priority}</td>
					<td class=" px-8 py-2">
						{new Date(Number(item.timestamp)).toDateString()}
					</td>
					<td class=" px-8 py-2">{item.publish}</td>
					<td class=" px-8 py-2">{item.trending}</td>

					<td class=" px-8 justify-center flex items-center mt-2  ">
						<!-- on click of image open image modal -->
						<div class="flex justify-end    items-center">
							<label for={i} class=" modal-button">
								<img
									class="w-6 2xl:w-12 h-auto flex justify-center items-center"
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
									class="w-full h-auto flex justify-center items-center"
									alt={item.name}
									src={item.url}
								/>
							</label>
						</label>
						<!-- bb -->
					</td>

					<td>
						<div
							class="flex justify-center  items-center 
					mb-2 list-none"
						>
							<li
								class=" text-sm mx-4  w-4 hover:bg-gray-300 p-0 cursor:move 2xl:w-10 active:bg-red-400 focus:bg-red-500"
								id="deleteBtn"
							>
								<!-- svelte-ignore a11y-missing-attribute -->

								<a
									title="Delete"
									on:click={() => {
										let deleteItemId = item.id;

										let deleteItemName = item.name;
										async function deleteTemplate(id) {
											let newArr = [];
											let newArrIndex = '';
											axios
												.delete(`${globalUrl}category/delete/${deleteItemName}`, {})
												.then(function (response) {
													paginationCategoryStore.subscribe((paginationCategoryStore) => {
														newArr = paginationCategoryStore;
														newArrIndex = newArr.findIndex((item) => item.id === deleteItemId);
													});
													newArr.splice(newArrIndex, 1);
													paginationCategoryStore.set(newArr);
												});
										}
										deleteTemplate(deleteItemId);
									}}
								>
									<MdDelete /></a
								>
							</li>

							<li
								class="  text-sm   w-4 2xl:w-10 hover:bg-gray-300 active:bg-blue-400 focus:bg-blue-500"
							>
								<!-- svelte-ignore a11y-missing-attribute -->
								<a
									title="Mark as Trending"
									on:click={() => {
										let newArr = [];
										let categoryName = item.name;
										let categoryId = item.id;
										let isTrending = item.trending;

										async function setTrendingCategory() {
											try {
												const response = await axios.post(
													`${globalUrl}category/set-trending/${categoryName}/${isTrending}`,

													{}
												);
												console.log(response);
												paginationCategoryStore.subscribe((paginationCategoryStore) => {
													newArr = paginationCategoryStore;
												});
												const filteredData = newArr.find((data) => data.id === categoryId);
												filteredData.trending = response.data.trending;
												console.log(filteredData);

												paginationCategoryStore.set(newArr);
											} catch (e) {
												console.log(e);
											}
										}
										setTrendingCategory();
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
		<Pagination items={category} bind:paginatedItems />
	</div>
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 20%;
		left: 50%;
	}
</style>
