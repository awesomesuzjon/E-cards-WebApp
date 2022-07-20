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
	import { paginationtrendingTemplatesTableStore } from '../../stores/paginationStore';

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
	import { globalUrl } from '../../utils/urls';

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

	export let trendingTemplatesArr = [];
	onMount(() => {
		fetch(`${globalUrl}/template/show-trending-templates`).then((res) => {
			res.json().then((data) => {
				trendingTemplatesArr = data?.templates ?? [];
				paginationtrendingTemplatesTableStore.set(trendingTemplatesArr);
			});
		});
	});

	///pagination code

	let trendingTemplates = [];
	paginationtrendingTemplatesTableStore.subscribe((paginationtrendingTemplatesTableStore) => {
		trendingTemplates = paginationtrendingTemplatesTableStore;
	});
</script>

{#if !isPageLoaded}
	<div class="text-lg spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
	<!-- </div> -->
	<div class="flex mt-4 ">
		<!-- <div class="relative"> -->
		<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
			<tr id="templatesTableRow" class="">
				<th class="bg-red-700">
					<!-- <label>
					<input type="checkbox" class="checkbox" />
				</label> -->
				</th>
				<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Title</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Tags</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Preview</th>
				<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
			</tr>

			{#each paginatedItems as item, i}
				<!-- {#each trendingTemplatesArr as item} -->
				<tr>
					<th>
						<!-- <label>
						<input type="checkbox" class="checkbox" />
					</label> -->
					</th>
					<td class=" px-8 py-2">{item.id}</td>
					<td class=" px-8 py-2">{item.title}</td>
					<td class=" px-8 py-2">{item.tags}</td>
					<td class=" px-8 py-2">{item.categoryName}</td>
					<td class=" px-8 py-2">{item.priority}</td>
					<td class=" px-8 py-2">
						<!-- on click of image open image modal -->
						<div class="flex justify-end  mt-4 mr-5">
							<label for={i} class=" modal-button">
								<img
									class="w-4 h-auto flex justify-center items-center"
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
						<div class="flex justify-around items-center mb-2 list-none">
							<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move ">
								<!-- svelte-ignore a11y-missing-attribute -->

								<a
									title="Delete"
									on:click={() => {
										let deleteItemId = item.id;
										deleteItemId, 'is my id';
										let newArr = [];
										let newArrIndex = '';
										async function deleteTemplate(id) {
											// post:"/set-trending/{name}/{prev_status}",

											axios
												.delete(`${globalUrl}/template/delete/${deleteItemId}`, {})
												.then(function (response) {
													paginationtrendingTemplatesTableStore.subscribe(
														(paginationtrendingTemplatesTableStore) => {
															newArr = paginationtrendingTemplatesTableStore;
															newArrIndex = newArr.findIndex((item) => item.id === deleteItemId);
														}
													);
													newArr.splice(newArrIndex, 1);

													paginationtrendingTemplatesTableStore.set(newArr);
												})
												.catch(function (error) {
													error;
												});
										}
										deleteTemplate(deleteItemId);
										deleteItemId, 'deleted';
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
										let templateId = item.id;
										let id = item.id;
										let isTrending = item.trending;
										isTrending;
										id;

										async function setTrendingTemplate() {
											// post:"/set-trending/{name}/{prev_status}",

											axios
												.post(`${globalUrl}/template/set-trending/${templateId}/${isTrending}`, {})
												.then(function (response) {
													response;
												})
												.catch(function (error) {
													error;
												});
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

	<div class="mx-5 ">
		<Pagination items={trendingTemplates} bind:paginatedItems />
	</div>
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 20%;
		left: 50%;
	}
</style>
