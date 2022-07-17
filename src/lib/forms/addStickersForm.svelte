<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import { imageSrcStore } from '../../stores/imgSrc';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	import { paginationStickerStore } from '../../stores/paginationStore';

	let files;

	var categoryOptionArr = [];
	onMount(() => {
		fetch(`${globalUrl}/category/show-name-list`).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
				// categoryArr = data;
			});
			console.log(categoryOptionArr);
		});
	});

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
	imageSrcStore.subscribe((imageSrcStore) => {
		imageUrl = imageSrcStore;
	});

	async function postSticker() {
		var stickerNameInput = document.getElementById('nameSticker')?.value;
		var imgUrl = imageUrl;
		var priorityInput = document.getElementById('prioritySticker')?.value;
		var categoryInput = document.getElementById('categorySticker')?.selectedOptions[0].value;
		var publishInput = document.getElementById('publishSticker')?.checked;
		let data = {
			name: stickerNameInput,
			url: imgUrl,
			priority: Number(priorityInput),
			category: categoryInput,
			publish: publishInput
		};

		let stickerArr = [];
		axios.post(`${globalUrl}/sticker/save`, data).then(function (response) {
			paginationStickerStore.subscribe((paginationStickerStore) => {
				stickerArr = paginationStickerStore;
			});
			stickerArr.push(response.data.savedSticker);
			paginationStickerStore.set(stickerArr);
		});
	}
</script>

<div class="flex flex-col justify-center items-center text-sm my-4  p-2 dark:text-white">
	<form
		class="addStickerForm "
		on:submit={(e) => {
			e.preventDefault();
			postSticker();
		}}
	>
		<div class="my-2">
			<label for="name">Sticker Name:</label>
			<input
				type="text"
				name="nameSticker"
				id="nameSticker"
				required
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div class="my-4 items-start">
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="prioritySticker"
				id="prioritySticker"
				required
				class="border-b-2 dark:text-black bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

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
				for="categorySticker"><h1>Category:</h1></label
			>
			<select id="categorySticker" name="category" class=" text-sm h-8 mx-2" required>
				<option value="">Select a category</option>
				{#each categoryOptionArr as item}
					<option value={item}>{item}</option>\
				{/each}
			</select>
		</div>

		<div class=" my-2">
			<input type="checkbox" value="" name="publishSticker" id="publishSticker" />
			<span> Publish </span>
		</div>

		<Button>Add Sticker</Button>
	</form>
</div>
