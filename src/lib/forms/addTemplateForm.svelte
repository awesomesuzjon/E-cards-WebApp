<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';

	let files;

	//category dropdown
	var categoryOptionArr = [];
	let categoryOptions = `${globalUrl}/category/show-name-list`;
	onMount(() => {
		fetch(categoryOptions).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
				// categoryArr = data;
			});
		});
	});

	async function postTemplate() {
		var nameInput = document.getElementById('nameTemplate')?.value;
		console.log(nameInput, 'nameInput');
		var imgUrl = imageUrl;

		var priorityInput = document.getElementById('priorityTemplate')?.value;
		console.log(priorityInput, 'priorityInput');

		var tagInput = document.getElementById('tagTemplate')?.value;

		var categoryInput = document.getElementById('categoryTemplate')?.selectedOptions[0].value;
		console.log(categoryInput, 'categoryInput');

		// var publishInput = document.getElementById('publishTemplate')?.checked;

		let data = {
			title: nameInput,
			url: imageUrl,
			tags: tagInput,
			priority: Number(priorityInput),
			category_name: categoryInput
			// publish: publishInput
		};

		axios
			.post(`${globalUrl}/template/save`, data)

			.then(function (response) {
				console.log('Successfully Added Template To Table', response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	//image upload base64
	var imageUrl = '';
	function addFile(e) {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			var uploadImageSrc = e.target.result;
			imageSrcStore.set(uploadImageSrc);
		};
	}
</script>

<div class="flex flex-col justify-center items-center text-sm my-4  p-2 dark:text-white">
	<form
		on:submit={(e) => {
			postTemplate();
			e.preventDefault();
		}}
		class="addTemplateForm flex flex-col text-sm justify-center items-center "
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
		<span class=" ml-8 italic bold text-sm">Tip:Separate tags with comma (,)</span>
		<div class="flex justify-center items-center my-4">
			<label for="name">Upload Sticker : </label>
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
			<select id="categoryTemplate" name="categoryTemplate" class=" text-sm h-8 mx-2" required>
				<option value="">Select a category</option>
				{#each categoryOptionArr as item}
					<option value={item}>{item}</option>\
				{/each}
			</select>
		</div>
		<br />
		<div class="flex my-4">
			<input type="checkbox" name="publishTemplate" id="publishTemplate" class="mx-2" />
			<span>Publish</span>
		</div>
		<Button>Add Template</Button>
	</form>
</div>
<!-- <form class="delete text-lg ">	
			<label for="id">Document id:</label>
			<input
				type="text"
				name="id"
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8  hover:no-underline"
				required
			/>

			<button class="btn my-4">Delete</button>
		</form> -->
