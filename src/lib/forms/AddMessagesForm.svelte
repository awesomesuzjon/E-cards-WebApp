<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	import { paginationMessageStore } from '../../stores/paginationStore';

	var categoryOptionArr = [];
	onMount(() => {
		fetch(`${globalUrl}/category/show-name-list`).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
				// categoryArr = data;
			});
		});
	});

	async function postMessage() {
		var nameInput = document.getElementById('nameMsg')?.value;
		var priorityInput = document.getElementById('priorityMsg')?.value;
		var categoryInput = document.getElementById('categoryMsg')?.selectedOptions[0].value;
		var publishInput = document.getElementById('publishMsg')?.checked;
		var TrendingInput = document.getElementById('trending')?.checked;

		let data = {
			message: nameInput,
			priority: Number(priorityInput),
			category: categoryInput,
			publish: publishInput,
			trending: TrendingInput
		};

		let newArr = [];
		axios.post(`${globalUrl}/message/save`, data).then(function (response) {
			paginationMessageStore.subscribe((paginationMessageStore) => {
				newArr = paginationMessageStore;
			});
			newArr.push(response.data.message);
			paginationMessageStore.set(newArr);
		});
	}
</script>

<div class="flex flex-col justify-center items-center text-sm my-4 dark:text-white">
	<form
		class="addCategoryForm text-lg"
		on:submit={(e) => {
			e.preventDefault();

			postMessage();
		}}
	>
		<div class="my-2">
			<label for="name">Message:</label>
			<input
				type="text"
				name="nameMsg"
				required
				id="nameMsg"
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>

			<!-- <div class="my-2">
				<label for="name">Category:</label>
				<input
					type="text"
					name="categoryMsg"
					required
					id="categoryMsg"
					class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
				/>
			</div> -->
			<div class="my-4">
				<label for="priority">Priority:</label>
				<input
					type="number"
					id="priorityMsg"
					name="priorityMsg"
					required
					class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
				/>
			</div>

			<div class="flex my-4 items-center">
				<label
					class=" my-2 label-optional label-optional-personal label-required-public"
					for="categoryMsg"><h1>Category:</h1></label
				>
				<select id="categoryMsg" name="category" class=" text-sm h-8 mx-2" required>
					<option value="">Select a category</option>
					{#each categoryOptionArr as item}
						<option value={item}>{item}</option>\
					{/each}
				</select>
			</div>

			<div class=" my-2">
				<input type="checkbox" name="publishMsg" id="publishMsg" class="mx-2" />
				<span> Publish </span>
			</div>

			<div class=" my-2">
				<input type="checkbox" name="trendingMsg" id="trendingMsg" class="mx-2" />
				<span> Trending </span>
			</div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a> <Button>Add Message</Button> </a>
		</div>
	</form>
</div>
