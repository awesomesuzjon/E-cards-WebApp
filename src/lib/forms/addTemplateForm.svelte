<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { imageSrcStore } from '../../stores/imgSrc';
	import { paginationtemplatesTableStore } from '../../stores/paginationStore';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';

	let files;

	//image upload base64
	let imageUrl = '';
	function addFile(e) {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			let uploadImageSrc = e.target.result;
			imageSrcStore.set(uploadImageSrc);
		};
	}
	imageSrcStore.subscribe((imageSrcStore) => {
		imageUrl = imageSrcStore;
	});

	//category dropdown
	let categoryOptionArr = [];
	let categoryOptions = `${globalUrl}category/show-name-list`;
	onMount(() => {
		fetch(categoryOptions).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
			});
		});
	});

	async function postTemplate() {
		let nameInput = document.getElementById('nameTemplate')?.value;
		let imgUrl = imageUrl;
		let priorityInput = document.getElementById('priorityTemplate')?.value;
		let tagInput = document.getElementById('tagTemplate')?.value;
		let categoryInput = document.getElementById('categoryTemplate')?.selectedOptions[0].value;

		let data = {
			title: nameInput,
			url: imgUrl,
			tags: tagInput,
			priority: Number(priorityInput),
			category_name: categoryInput
		};
		data, 'it is';
		let newArr = [];
		axios.post(`${globalUrl}template/save`, data).then(function (response) {
			paginationtemplatesTableStore.subscribe((paginationtemplatesTableStore) => {
				newArr = paginationtemplatesTableStore;
			});
			newArr.push(response.data.savedTemplate);
			response.data;
			paginationtemplatesTableStore.set(newArr);
		});
	}
</script>

<div class="flex flex-col justify-center items-center text-sm my-4  p-2 dark:text-white">
	<form
		on:submit={(e) => {
			postTemplate();
			e.preventDefault();
		}}
		class="addTemplateForm flex flex-col text-sm justify-center items-center 2xl:text-3xl"
	>
		<div class="my-2">
			<label for="title">Title:</label>
			<input
				type="text"
				name="nameTemplate"
				id="nameTemplate"
				required
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>
		<div class="my-4">
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priorityTemplate"
				id="priorityTemplate"
				required
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200   h-8 hover:no-underline"
			/>
		</div>
		<div class="my-4">
			<label for="tags">Tags:</label>
			<input
				type="text"
				name="tags"
				id="tagTemplate"
				required
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200  h-8  hover:no-underline"
			/>
		</div>
		<span class=" ml-8 2xl:m-0 italic bold text-sm 2xl:text-lg"
			>Tip:Separate tags with comma (,)</span
		>
		<div class="flex justify-center items-center my-4">
			<label for="name">Upload Sticker </label>
			<input
				type="file"
				id="imgUpload"
				class="w-60 mx-2 bg-red-700 dark:bg-red-700"
				accept="image/*"
				name="preview"
				bind:files
				on:change={addFile}
			/>
		</div>
		<div class="flex my-4 items-center">
			<label
				class=" my-2 label-optional label-optional-personal label-required-public"
				for="categoryTemplate"><h1>Category:</h1></label
			>
			<select
				id="categoryTemplate"
				name="categoryTemplate"
				class=" text-sm h-8 mx-2 2xl:h-12"
				required
			>
				<option value="">Select a category</option>
				{#each categoryOptionArr as item}
					<option value={item}>{item}</option>\
				{/each}
			</select>
		</div>
		<br />

		<Button>Add Template</Button>
	</form>
</div>

<style>
	input[type='file']::file-selector-button {
		border: 2px solid transparent;
		border-right: black;
		background-color: hwb(0 13% 23%);
		transition: 1s;
	}
</style>
