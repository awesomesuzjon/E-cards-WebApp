<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';

	onMount(() => {
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Stickers = [
					...Stickers,
					{
						...doc.data(),
						Id: doc.id
					}
				];
			});
		});
	});

	//initialiaze an array to store stickers from firestore
	let Stickers = [];

	//init database services
	const db = getFirestore();

	//collection ref
	const colRef = collection(db, 'Stickers');

	//pagination code
	let currentPage = 1;
	let items = [];
	let pageSize = 3;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 dark:bg-gray-800">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Sticker Name</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		{#each Stickers as card}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2">{card.Id}</td>
				<td class=" px-8 py-2">{card.Name}</td>
				<td class=" px-8 py-2">{card.Priority}</td>
				<td class=" px-8 py-2">{card.Category}</td>
				<td class=" px-8 py-2"
					><img class="w-4 h-auto flex justify-center items-center" src={card.Preview} alt="" /></td
				>
				<td>
					<div class="collapse">
						<input type="checkbox" class="peer" />
						<div class="collapse-title ">
							<Button>:</Button>
						</div>
						<div class="collapse-content  ">
							<div class="  justify-center relative   " id="toggleContent">
								<ul class="  h-auto  ">
									<div class="flex justify-around items-center mb-2">
										<li class="   text-sm w-4">
											<!-- svelte-ignore a11y-missing-attribute -->
											<a title="Edit">
												<span><FaEdit /></span>
											</a>
										</li>
										<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move ">
											<!-- svelte-ignore a11y-missing-attribute -->
											<a
												title="Delete"
												on:click={//delete row on table through delete button
												(e) => {
													e.stopPropagation();

													const docRef = doc(db, 'Stickers', card.Id);
													console.log(card.Id, 'card item id');
													deleteDoc(docRef);
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
											<a href="/" title="Mark as Trending"> <DiMarkdown /> </a>
										</li>
										<!-- </div> -->
									</div>
								</ul>
							</div>
						</div>
					</div>
				</td>
			</tr>
		{/each}
	</table>
</div>

<section>
	<LightPaginationNav
		totalItems={Stickers.length}
		{currentPage}
		limit={3}
		{pageSize}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</section>
