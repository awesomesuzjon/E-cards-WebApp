<script>
	import Pagination from '../reusable/pagination.svelte';
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import { previewImgFunc } from '../../utils/previewImgntbl';
	import axios from 'axios';
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

	let url = 'http://192.168.86.54:8090/template/show-trending-templates';
	let jsonUrl = 'https://jsonplaceholder.typicode.com/todos/';
	export var trendingTemplatesArr = [];
	onMount(() => {
		fetch(jsonUrl).then((res) => {
			res.json().then((data) => {
				// trendingTemplatesArr = data?.templates ?? [];
				trendingTemplatesArr = data;
				paginationtrendingTemplatesTableStore.set(trendingTemplatesArr);
			});
		});
	});

	///pagination code

	var trendingTemplates = [];
	paginationtrendingTemplatesTableStore.subscribe((paginationtrendingTemplatesTableStore) => {
		trendingTemplates = paginationtrendingTemplatesTableStore;
	});
</script>

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
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Preview</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Tags</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">isTrending</th>
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
				<td class=" px-8 py-2">{item.category_name}</td>
				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.trending}</td>
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
									var deleteItemId = item.id;
									var deleteItemName = item.name;
									console.log(deleteItemId, 'is my id');
									async function deleteTemplate(id) {
										// post:"/set-trending/{name}/{prev_status}",

										axios
											.delete(`${globalUrl}/delete/template/${deleteItemId}`, {})
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

						<li class="  text-sm   w-4">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a
								title="Mark as Trending"
								on:click={() => {
									var templateId = item.id;
									var id = item.id;
									var isTrending = item.is_trending;
									console.log(isTrending);
									console.log(id);

									async function setTrendingTemplate() {
										// post:"/set-trending/{name}/{prev_status}",

										axios
											.post(`${globalUrl}/update/trending/${templateId}/${isTrending}`, {})
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
