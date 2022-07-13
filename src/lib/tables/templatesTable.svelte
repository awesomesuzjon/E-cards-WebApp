<script>
	import Pagination from '../reusable/pagination.svelte';
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import { previewImgFunc } from '../../utils/previewImgntbl';
	import axios from 'axios';

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

	let Ecards = [];

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

	let url = 'http://192.168.86.54:8090/show/templates';
	let trendingUrl = 'http://192.168.86.54:8090/get/trendingtemplate';

	export var allTemplatesArr = [];
	var templatesTrendingArr = [];
	let priority = 0;

	onMount(() => {
		fetch(url).then((res) => {
			res.json().then((data) => {
				allTemplatesArr = data?.templates ?? [];
				// categoryArr = data;
				console.log(allTemplatesArr, 'this is category array ');
			});
		});
	});
</script>

<!-- </div> -->
<div class="flex mt-4 ">
	<img
		id="targetContent"
		class="z-50    absolute w-4/12 h-4/5 hidden   justify-center"
		src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/holi-design-template-44ce589f65c0ac4315a373fff00def9d_screen.jpg?ts=1600223391"
		alt=""
	/>

	<!-- <div class="relative"> -->
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
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

		<!-- {#each paginatedItems as item} -->
		{#each allTemplatesArr as item}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2">{item.id}</td>
				<td class=" px-8 py-2">{item.title}</td>
				<td class=" px-8 py-2 " id="toggleImgBtn">
					<span><button on:click={previewImgFunc}>👁</button></span>
				</td>

				<td class=" px-8 py-2">{item.tags}</td>
				<td class=" px-8 py-2">{item.category_name}</td>
				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.is_trending}</td>

				<td>
					<!-- <div class="collapse">
						<input type="checkbox" class="peer" />
						<div class="collapse-title ">
							<Button>:</Button>
						</div>
						<div class="collapse-content  ">
							<div class="  justify-center relative   " id="toggleContent">
								<ul class="  h-auto  "> -->
					<div class="flex justify-around items-center mb-2 list-none">
						<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move ">
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- <a
												title="Delete"
												on:click={//delete row on table through delete button
												(e) => {
													e.stopPropagation();

													const docRef = doc(db, 'Stickers', card.Id);
													console.log(card.Id, 'card item id');
													deleteDoc(docRef);
												}}
											>
												</a
											> -->
							<a
								title="Delete"
								on:click={() => {
									var deleteItemId = item.id;
									var deleteItemName = item.name;
									console.log(deleteItemId, 'is my id');
									async function deleteTemplate(id) {
										// post:"/set-trending/{name}/{prev_status}",

										axios
											.delete(`http://192.168.86.54:8090/delete/template/${deleteItemId}`, {})
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
						<!-- <div class="flex justify-around items-center"> -->
						<li class="  text-sm  w-4 ">
							<a href="/" title="Clone"> <MdContentCopy /> </a>
						</li>
						<li class="  text-sm   w-4">
							<!-- svelte-ignore missing-declaration -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<a
								title="Mark as Trending"
								on:click={() => {
									priority = 1;

									var templateId = item.id;
									var id = item.id;
									var isTrending = item.is_trending;
									console.log(isTrending);
									console.log(id);

									async function setTrendingTemplate() {
										// post:"/set-trending/{name}/{prev_status}",

										axios
											.post(
												`http://192.168.86.54:8090/update/trending/${templateId}/${isTrending}`,
												{}
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
	<Pagination items={Ecards} bind:paginatedItems />
</div>
