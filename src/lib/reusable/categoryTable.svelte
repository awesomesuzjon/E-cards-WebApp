<script>
	import { previewtbl, previewImgFunc } from '../../utils/previewImgntbl';
	import Pagination from '../reusable/pagination.svelte';
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

	let Category = [];

	const db = getFirestore();

	const colRef = collection(db, 'Category');

	onMount(() => {
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Category = [
					...Category,
					{
						...doc.data(),
						Id: doc.id,
						name: doc.name,
						priority: doc.priority,
						publish: doc.publish
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
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Title</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		{#each Category as card}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2">{card.Id}</td>
				<td class=" px-8 py-2">{card.Name}</td>

				<td class=" px-8 py-2">{card.Priority}</td>
				<td class=" px-8 py-2">{card.Publish}</td>
			</tr>
		{/each}
	</table>
</div>

