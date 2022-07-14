<script>
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import Pagination from '../reusable/pagination.svelte';
	import { paginationCategoryStore } from '../../stores/paginationStore';
	import axios from 'axios';

	//firebase setup here
	import {
		getFirestore,
		addDoc,
		getDocs,
		deleteDoc,
		doc,
		collection,
		onSnapshot
	} from 'firebase/firestore';

	let Category = [];
	// init database services
	const db = getFirestore();

	// collection ref
	const colRef = collection(db, 'Category');

	onMount(() => {
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Category = [
					...Category,
					{
						...doc.data(),
						Id: doc.id
					}
				];
			});
		});
	});

	//from backend grpc
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';

	export var categoryArr = [];

	onMount(() => {
		// fetch(`${globalUrl}/category/show-all-category`).then((res) => {
		fetch(`https://fakestoreapi.com/products`).then((res) => {
			res.json().then((data) => {
				// categoryArr = data?.categories ?? [];
				categoryArr = data;
				paginationCategoryStore.set(categoryArr);
			});
		});
	});

	///pagination code
	let paginatedItems = [];
	$: paginatedItems;
	var category = [];
	paginationCategoryStore.subscribe((paginationCategoryStore) => {
		category = paginationCategoryStore;
	});
</script>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 dark:bg-gray-800">
				<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Category Name</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Mark as Trending</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>

			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>
		<!-- {#each categoryArr as item} -->
		{#each paginatedItems as item, i}
			<tr>
				<th>
					<!-- <label>
						<input type="checkbox" class="checkbox" />
					</label> -->
				</th>
				<td class=" px-8 py-2 ">{item.id}</td>
				<td class=" px-8 py-2">{item.name}</td>
				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.publish}</td>
				<td class=" px-8 py-2">{item.trending}</td>
				<!-- <td class=" px-8 py-2">{item.publish}</td> -->
				<div class="flex justify-end  mt-4 mr-5">
					<label for="my-modal" class=" modal-button">
						<img class="w-4 h-auto flex justify-center items-center" src={item.url} alt="" />
					</label>
				</div>

				<input type="checkbox" id={i} class="modal-toggle " />
				<label
					for={i}
					class="modal cursor-pointer bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl bg-opacity-50  border border-gray-100"
				>
					<label class="modal-box relative" for={i}>
						<img class="w-full h-auto flex justify-center items-center" alt="" src={item.url} />
					</label>
				</label>
				<td>
					<div
						class="flex justify-around items-center 
					mb-2 list-none"
					>
						<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move " id="deleteBtn">
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
											.delete(`${globalUrl}/category/delete/${deleteItemName}`, {})
											.then(function (response) {
												console.log(response);
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
						<!-- 
						<li class="  text-sm  w-4 ">
							<a href="/" title="Clone"> <MdContentCopy /> </a>
						</li> -->
						<li class="  text-sm   w-4">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a
								title="Mark as Trending"
								on:click={() => {
									priority = 1;
									console.log('click');
									// fetch(trendingUrl).then((res) => {
									// 	res.json().then((data) => {
									// 		categoryTrendingArr = data?.templates ?? [];
									// 		// categoryArr = data;
									// 	});
									// });
									var categoryName = item.name;
									var id = item.id;
									var isTrending = item.trending;
									if (isTrending != true) {
										isTrending = false;
										// isTrending = isTrending1;

										console.log(isTrending, 'status ');
									}
									console.log(categoryName);
									console.log(isTrending);
									console.log(id);

									async function setTrendingTemplate() {
										// post:"/set-trending/{name}/{prev_status}",

										console.log(globalUrl);
										axios
											.post(
												// `http://192.168.86.54:8090/category/mark-trending/${categoryName}/${isTrending}`,
												`${globalUrl}/category/settor-trending-status/${categoryName}/${isTrending}`,
												{}
												// let url = globalUrl + `category/show-all-category`;
												//
											)
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
		<!-- {/each} -->
		<!-- {/if} -->
	</table>
</div>
<div class="mx-5">
	<Pagination items={category} bind:paginatedItems />
</div>
