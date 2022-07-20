<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import { imageSrcStore } from '../../stores/imgSrc';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { globalUrl } from '../../utils/urls';
	import { paginationCategoryStore } from '../../stores/paginationStore';

	let files;
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

	async function postCategory() {
		let nameInput = document.getElementById('nameSticker')?.value;
		let imgUrl = imageUrl;
		let priorityInput = document.getElementById('priority')?.value;
		let publishInput = document.getElementById('publish')?.checked;
		let TrendingInput = document.getElementById('trending')?.checked;

		let data = {
			name: nameInput,
			url: imgUrl,
			priority: Number(priorityInput),
			publish: publishInput,
			trending: TrendingInput
		};
		data;
		let newArr = [];
		axios.post(`${globalUrl}/category/save`, data).then(function (response) {
			paginationCategoryStore.subscribe((paginationCategoryStore) => {
				newArr = paginationCategoryStore;
			});

			newArr.push(response.data.savedCategory);
			paginationCategoryStore.set(newArr);
		});
	}
</script>

<!-- newform -->
<form
	class="w-full max-w-sm 2xl:text-2xl dark:text-white"
	on:submit={(e) => {
		e.preventDefault();
		postCategory();
	}}
>
	<div class="md:flex md:items-center mb-6 dark:text-white">
		<div class="md:w-1/3">
			<label
				for="name"
				class="block dark:text-white text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
			>
				Name
			</label>
		</div>
		<div class="md:w-2/3">
			<input
				type="text"
				id="nameSticker"
				name="nameSticker"
				required
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				placeholder="Enter Name"
			/>
		</div>
	</div>
	<div class="md:flex md:items-center mb-6">
		<div class="md:w-1/3">
			<label
				class="block dark:text-white text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
				for="priority"
			>
				Priority
			</label>
		</div>
		<div class="md:w-2/3">
			<input
				type="number"
				id="priority"
				name="priority"
				required
				class="bg-gray-200  dark:text-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
			/>
		</div>
	</div>
	<div class="flex justify-center items-center  my-4 ml-8 2xl:m-0">
		<label
			for="name"
			class="block dark:text-white text-gray-500 font-bold  mb-1 md:mb-0 ml-4 2xl:m-0"
			>Upload Sticker
		</label>
		<input
			type="file"
			id="uploadImageSrc"
			class="w-60 2xl:w-72 mx-2 dark:text-white dark:bg-black block text-gray-500 font-bold  mb-1 md:mb-0 ml-4 2xl:mb-6"
			accept="image/*"
			name="preview"
			on:change={addFile}
		/>
	</div>

	<div class="md:flex md:items-center justify-start mb-6 ml-20">
		<div class="md:w-3/3" />
		<label class="md:w-2/3 block text-gray-500 font-bold">
			<input class="mr-4 leading-tight" type="checkbox" value="" name="publish" id="publish" />
			<span class="text-sm 2xl:text-2xl dark:text-white"> Publish </span>
		</label>
	</div>
	<div class="md:flex md:items-center mb-6 ml-20">
		<div class="md:w-3/3" />
		<label class="md:w-2/3 block text-gray-500 font-bold">
			<input class="mr-2 leading-tight" type="checkbox" value="" name="trending" id="trending" />
			<span class="text-sm 2xl:text-2xl dark:text-white"> Trending </span>
		</label>
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<Button>Add Category</Button>
</form>

<!-- newform -->
