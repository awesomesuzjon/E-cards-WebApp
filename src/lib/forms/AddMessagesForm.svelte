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
		var categoryInput = document.getElementById('categoryMsg')?.selectedOptions[0].value;
		var publishInput = document.getElementById('publishMsg')?.checked;

		let data = {
			message: nameInput,
			category: categoryInput,
			publish: publishInput
		};

		let newArr = [];
		axios.post(`${globalUrl}/message/save`, data).then(function (response) {
			paginationMessageStore.subscribe((paginationMessageStore) => {
				newArr = paginationMessageStore;
			});
			newArr.push(response.data.savedMessage);
			paginationMessageStore.set(newArr);
		});
	}
</script>

<form
	class="w-full max-w-sm 2xl:text-2xl"
	on:submit={(e) => {
		e.preventDefault();
		postMessage();
	}}
>
	<div class="md:flex md:items-center mb-6 ">
		<div class="md:w-1/3">
			<label
				for="name"
				class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4  dark:text-white"
			>
				Message
			</label>
		</div>
		<div class="md:w-2/3">
			<input
				type="text"
				name="nameMsg"
				required
				id="nameMsg"
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				placeholder="Enter Name"
			/>
		</div>
	</div>

	<div class="md:flex md:items-center mb-6">
		<label
			class=" my-2 label-optional label-optional-personal label-required-public text-gray-500 font-bold  mb-1 md:mb-0 ml-14 dark:text-white "
			for="categoryMsg"><h1>Category:</h1></label
		>
		<select
			id="categoryMsg"
			name="category"
			class="text-gray-500 font-bold  mb-1 md:mb-0 ml-4 text-sm h-8 mx-2 2xl:h-10"
			required
		>
			<option value="">Select a category</option>
			{#each categoryOptionArr as item}
				<option value={item}>{item}</option>\
			{/each}
		</select>
	</div>

	<div class="md:flex md:items-center justify-start mb-6 ml-20">
		<div class="md:w-3/3" />
		<label class="md:w-2/3 block text-gray-500 font-bold">
			<input
				class="mr-4 leading-tight 2xl:h-6"
				type="checkbox"
				value=""
				name="publishMsg"
				id="publishMsg"
			/>
			<span class="text-sm 2xl:text-2xl dark:text-white"> Publish </span>
		</label>
	</div>

	<!-- svelte-ignore a11y-missing-attribute -->
	<a> <Button>Add Message</Button> </a>
</form>
