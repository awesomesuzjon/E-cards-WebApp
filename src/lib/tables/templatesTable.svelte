<script>
	import Pagination from '../reusable/pagination.svelte';
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import { previewImgFunc } from '../../utils/previewImgntbl';
	import axios from 'axios';
	import Spinner from 'svelte-spinner';
	import { globalUrl } from '../../utils/urls';
	import { paginationtemplatesTableStore } from '../../stores/paginationStore';

	// import {
	// 	getFirestore,
	// 	addDoc,
	// 	getDocs,
	// 	deleteDoc,
	// 	doc,
	// 	collection,
	// 	onSnapshot
	// } from 'firebase/firestore';
	import { onMount } from 'svelte';

	//loading spinner
	let isPageLoaded = false;
	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 2000);
	});

	///pagination code
	let paginatedItems = [];
	$: paginatedItems;

	//init database services
	// const db = getFirestore();

	//collection ref
	// const colRef = collection(db, 'Ecards');

	// onMount(() => {
	// 	onSnapshot(colRef, (snapshot) => {
	// 		snapshot.docs.forEach((doc) => {
	// 			Ecards = [
	// 				...Ecards,
	// 				{
	// 					...doc.data(),
	// 					Id: doc.id
	// 				}
	// 			];
	// 		});
	// 	});
	// });

	//category fetch
	var categoryOptionArr = [];
	onMount(() => {
		fetch(`${globalUrl}category/show-name-list`).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
			});
			categoryOptionArr;
		});
	});

	let url = `${globalUrl}template/show-all-templates`;

	export var allTemplatesArr = [];

	onMount(() => {
		fetch(url).then((res) => {
			res.json().then((data) => {
				allTemplatesArr = data?.templates ?? [];
				paginationtemplatesTableStore.set(allTemplatesArr);
			});
		});
	});

	///pagination code

	var allTemplates = [];
	paginationtemplatesTableStore.subscribe((paginationtemplatesTableStore) => {
		allTemplates = paginationtemplatesTableStore;
	});
</script>

{#if !isPageLoaded}
	<div class="text-lg spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
	<!-- this is category dropdown -->
	<div class="flex my-4 items-center">
		<label
			class=" my-2 label-optional dark:text-white ml-4 label-optional-personal label-required-public"
			for="categoryTemplateValue"><h1>Category:</h1></label
		>
		<select
			id="categoryTemplateValue"
			name="categoryTemplate"
			class=" text-sm h-10 mx-2 2xl:h-16 2xl:text-2xl"
			required
		>
			<option value="">Select a category</option>
			{#each categoryOptionArr as item}
				<option
					value={item}
					on:click={() => {
						var categoryName = item;
						console.log(categoryName);
						async function categoryNameFunc(categoryName) {
							axios
								.get(`${globalUrl}template/get-templates-of-this-category/${categoryName}`, {})
								.then(function (response) {
									if (response?.data?.templates) {
										allTemplates = [...response.data.templates];
									} else {
										paginationtemplatesTableStore.subscribe((paginationtemplatesTableStore) => {
											allTemplates = [...paginationtemplatesTableStore];
											paginationtemplatesTableStore.set(allTemplates);
										});
									}
								})
								.catch(function (error) {
									error;
								});
						}
						categoryNameFunc(categoryName);
					}}>{item}</option
				>
			{/each}
		</select>
	</div>

	<!-- ????????-->
	<!-- </div> -->
	<div class="flex mt-4 ">
		<!-- <div class="relative"> -->
		<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
			<tr id="templatesTableRow" class="2xl:text-3xl">
				<!-- <th class="bg-red-700"> -->
				<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
				<!-- </th> -->
				<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Title</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Preview</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Tags</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">isTrending</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
			</tr>

			{#each paginatedItems as item}
				<!-- {#each allTemplatesArr as item} -->
				<tr class="2xl:text-3xl">
					<!-- <th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th> -->

					<td class=" px-8 py-2">{item.id}</td>
					<td class=" px-8 py-2">{item.title}</td>
					<!-- on click of image open image modal -->
					<div class="flex my-4 justify-center    mr-5 ">
						<label for={item.id} class=" modal-button">
							<img
								class="w-4 h-auto flex justify-center items-center"
								src={item.url}
								alt={item.name}
							/>
						</label>
					</div>

					<input type="checkbox" id={item.id} class="modal-toggle" />
					<label
						for={item.id}
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

					<td class=" px-8 py-2">{item.tags}</td>
					<td class=" px-8 py-2">{item.categoryName}</td>
					<td class=" px-8 py-2">{item.priority}</td>
					<td class=" px-8 py-2">{item.trending}</td>

					<td>
						<div class="flex justify-around items-center mb-2 list-none">
							<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move 2xl:w-10">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a
									title="Delete"
									on:click={() => {
										var deleteItemId = item.id;
										async function deleteTemplate(id) {
											let newArr = [];
											var newArrIndex = '';

											axios
												.delete(`${globalUrl}template/delete/${deleteItemId}`, {})
												.then(function (response) {
													paginationtemplatesTableStore.subscribe(
														(paginationtemplatesTableStore) => {
															newArr = paginationtemplatesTableStore;
															newArrIndex = newArr.findIndex((item) => item.id === deleteItemId);
														}
													);
													newArr.splice(newArrIndex, 1);
													paginationtemplatesTableStore.set(newArr);
												});

											// paginationCategoryStore.subscribe((paginationCategoryStore) => {
											// 		newArr = paginationCategoryStore;
											// 		newArrIndex = newArr.findIndex((item) => item.id === deleteItemId);
											// 	});
											// 	newArr.splice(newArrIndex, 1);
											// 	paginationCategoryStore.set(newArr);
											// });
										}
										deleteTemplate(deleteItemId);
									}}
								>
									<MdDelete /></a
								>
							</li>
							<!-- <div class="flex justify-around items-center"> -->

							<li class="  text-sm   w-4 2xl:w-10">
								<!-- svelte-ignore missing-declaration -->
								<!-- svelte-ignore a11y-missing-attribute -->
								<a
									title="Mark as Trending"
									on:click={() => {
										let newArr = [];
										const templateId = item.id;
										var isTrending = item.trending;
										isTrending;
										async function setTrendingTemplate() {
											// post:"/set-trending/{name}/{prev_status}",
											try {
												const response = await axios.post(
													`${globalUrl}template/set-trending/${templateId}/${isTrending}`,
													{}
												);
												paginationtemplatesTableStore.subscribe((paginationtemplatesTableStore) => {
													newArr = paginationtemplatesTableStore;
												});
												const filteredData = newArr.find((data) => data.id === templateId);
												filteredData.trending = response.data.trending;
												console.log(filteredData);

												paginationtemplatesTableStore.set(newArr);
											} catch (e) {
												console.log(e);
											}
										}
										setTrendingTemplate();
									}}
								>
									<DiMarkdown />
								</a>
							</li>
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
	<!-- </div>   -->

	<div class="mx-5">
		<Pagination items={allTemplates} bind:paginatedItems />
	</div>
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 20%;
		left: 50%;
	}
</style>
