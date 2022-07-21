<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import { imageSrcStore } from '../../stores/imgSrc';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	import { paginationStickerStore } from '../../stores/paginationStore';

	let files;

	let categoryOptionArr = [];
	onMount(() => {
		fetch(`${globalUrl}category/show-name-list`).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
				// categoryArr = data;
			});
			categoryOptionArr;
		});
	});

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

	async function postSticker() {
		let stickerNameInput = document.getElementById('nameSticker')?.value;
		let imgUrl = imageUrl;
		let priorityInput = document.getElementById('prioritySticker')?.value;
		let categoryInput = document.getElementById('categorySticker')?.selectedOptions[0].value;
		let publishInput = document.getElementById('publishSticker')?.checked;
		let data = {
			name: stickerNameInput,
			url: imgUrl,
			priority: Number(priorityInput),
			category: categoryInput,
			publish: publishInput
		};

		let stickerArr = [];
		axios.post(`${globalUrl}sticker/save`, data).then(function (response) {
			paginationStickerStore.subscribe((paginationStickerStore) => {
				stickerArr = paginationStickerStore;
			});
			stickerArr.push(response.data.savedSticker);
			paginationStickerStore.set(stickerArr);
		});
	}
</script>

<form
	class="w-full max-w-sm 2xl:text-2xl 2xl:p-8  dark:text-white"
	on:submit={(e) => {
		e.preventDefault();
		postSticker();
	}}
>
	<div class="md:flex md:items-center mb-6 ">
		<div class="md:w-1/3">
			<label
				for="name"
				class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4  dark:text-white"
			>
				Name:
			</label>
		</div>
		<div class="md:w-2/3">
			<input
				type="text"
				id="nameSticker"
				name="name"
				required
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				placeholder="Enter Sticker Name"
			/>
		</div>
	</div>

	<div class="md:flex md:items-center mb-6 ">
		<div class="md:w-1/3">
			<label
				class="block 	 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4  dark:text-white"
				for="priority"
			>
				Priority:
			</label>
		</div>
		<div class="md:w-2/3">
			<input
				type="number"
				id="prioritySticker"
				name="prioritySticker"
				required
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
			/>
		</div>
	</div>

	<div
		class="flex justify-center items-center my-4 truncate text-gray-500 font-bold  mb-1 md:mb-0 ml-14 dark:text-white"
	>
		<label for="name">Upload Sticker : </label>
		<input
			type="file"
			id="imgUpload"
			class="w-60 mx-2 dark:bg-black block text-gray-500 font-bold  mb-1 md:mb-0  dark:text-white"
			accept="image/*"
			name="preview"
			bind:files
			on:change={addFile}
		/>
	</div>

	<div class="md:flex md:items-center mb-6 my-4 ml-14">
		<label
			class=" my-2 label-optional label-optional-personal label-required-public text-gray-500 font-bold  mb-1 md:mb-0  dark:text-white"
			for="categoryMsg"><h1>Category:</h1></label
		>
		<select
			id="categorySticker"
			name="category"
			class="text-gray-500 font-bold  mb-1 md:mb-0 text-sm h-8 mx-2 2xl:h-12  dark:text-white"
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
				class="mr-4 leading-tight"
				type="checkbox"
				value=""
				name="publishSticker"
				id="publishSticker"
			/>
			<span class="text-sm 2xl:text-2xl  dark:text-white"> Publish </span>
		</label>
	</div>

	<Button>Add Sticker</Button>
</form>
