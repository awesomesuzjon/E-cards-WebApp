<script>
	import Button from '../reusable/button.svelte';
	import {
		getFirestore,
		addDoc,
		getDocs,
		deleteDoc,
		doc,
		collection,
		onSnapshot
	} from 'firebase/firestore';
	import { onMount } from 'svelte';

	let Stickers = [];

	//init database services
	const db = getFirestore();

	//collection ref
	const colRef = collection(db, 'Stickers');

	onMount(() => {
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Stickers = [
					...Stickers,
					{
						...doc.data(),
						Id: doc.id,
						title: doc.title,
						priority: doc.priority,
						preview: doc.preview,
						category: doc.category
					}
				];
			});
		});
	});
</script>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Sticker Name</th>

			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>
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
				<td class=" px-8 py-2">:</td>
				<td class=" px-8 py-2"><img class="w-8 h-auto" src={card.Preview} alt="" /></td>
			</tr>
		{/each}
	</table>
</div>
