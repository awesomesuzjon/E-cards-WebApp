<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import { imageSrcStore } from '../../stores/imgSrc';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { globalUrl } from '../../utils/urls';
	import { paginationCategoryStore } from '../../stores/paginationStore';

	// let files;
	// let uploadValue;

	// function addFile(e) {
	// 	let image = e.target.files[0];
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(image);
	// 	reader.onload = (e) => {
	// 		uploadValue = e.target.result;
	// 	};
	// }

	// const db = getFirestore();

	// const colRef = collection(db, 'Category');

	// const storeNewValues = () => {
	// 	const addCategoryForm = document.querySelector('.addCategoryForm');
	// 	addDoc(colRef, {
	// 		Name: addCategoryForm.name.value,
	// 		Priority: addCategoryForm.priority.value,
	// 		Publish: addCategoryForm.publish.value,
	// 		Preview: uploadValue
	// 	})
	// 		.then((e) => {
	// 			// console.log('the value of e ', e);
	// 			addCategoryForm.reset();
	// 		})
	// 		.catch((err) => {
	// 			console.log('sometihng went wrong while uploading to firestore');
	// 		});
	// };

	// const deleteValuesFromStore = () => {
	// 	const deleteCategoryForm = document.querySelector('.deleteCategory');

	// 	deleteCategoryForm.addEventListener('submit', (e) => {
	// 		e.preventDefault();

	// 		const docRef = doc(db, 'Category', deleteCategoryForm.id.value);
	// 		deleteDoc(docRef).then(() => {
	// 			deleteCategoryForm.reset();
	// 		});
	// 	});
	// };
	// async function doPost() {
	// 	var name = document.getElementById('fname').value;
	// 	var priority = document.getElementById('priority').value;
	// 	var publish = document.getElementById('publish').value;
	// 	var isTrending = document.getElementById('isTrending').value;
	// 	const res = await fetch('https://192.168.86.107:8090/save/catagory', {
	// 		method: 'POST',
	// 		body: {
	// 			name,
	// 			priority,
	// 			publish,
	// 			isTrending
	// 		}
	// 	});
	// 	console.log(name);

	// 	const json = await res.json();
	// 	result = JSON.stringify(json);
	// }
	//upload image
	let files;
	var imageUrl = '';
	var name = '';
	var priority = '';

	var publish = '';
	var trending = '';
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
	console.log(imageUrl);

	async function postArticle() {
		var nameInput = document.getElementById('fname')?.value;
		var imgUrl = imageUrl;
		var priorityInput = document.getElementById('priority')?.value;
		var publishInput = document.getElementById('publish')?.checked;
		var TrendingInput = document.getElementById('trending')?.checked;

		let data = {
			name: nameInput,
			url: imgUrl,
			priority: Number(priorityInput),
			publish: publishInput,
			trending: TrendingInput
		};
		let newArr = [];
		axios
			.post(`${globalUrl}/category/save`, data)
			.then(function (response) {
				paginationCategoryStore.subscribe((paginationCategoryStore) => {
					newArr = paginationCategoryStore;
					newArr.push(response.data);
					// paginationCategoryStore.set(paginationCategoryStore)
				});
				paginationCategoryStore.set(newArr);
				console.log(paginationCategoryStore, 'is last data');
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	// <!-- <button on:click={()=>postArticle(data)}>here</button> -->
</script>

<div class="flex flex-col justify-center items-center text-sm  dark:text-white">
	<form
		class="addCategoryForm text-sm"
		on:submit={(e) => {
			e.preventDefault();
			postArticle();
		}}
	>
		<div class="my-2 text-sm">
			<label for="name">Name :</label>
			<input
				type="text"
				id="fname"
				name="name"
				bind:value={name}
				required
				class="border-b-2 bg-gray-100 dark:text-black hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div>
			<label for="priority">Priority:</label>
			<input
				type="number"
				id="priority"
				bind:value={priority}
				name="priority"
				required
				class="border-b-2 bg-gray-100 dark:text-black hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>
		<div class="flex justify-center items-center  my-4">
			<label for="name">Upload Sticker : </label>
			<input
				type="file"
				id="uploadImageSrc"
				class="w-60 mx-2 dark:bg-red-700"
				accept="image/*"
				name="preview"
				bind:files
				on:change={addFile}
			/>
		</div>

		<div class=" my-2">
			<input type="checkbox" value="" name="publish" id="publish" bind={publish} />
			<span> Publish </span>
		</div>
		<div class=" my-2">
			<input type="checkbox" value="" name="trending" id="trending" bind={trending} />
			<span> Trending </span>
		</div>

		<!-- svelte-ignore a11y-missing-attribute -->
		<Button>Add Category</Button>
	</form>
	<!-- <form
		class="deleteCategory text-sm mt-2  flex flex-col "
		on:submit={(e) => {
			deleteValuesFromStore();
			e.preventDefault();
		}}
	>
		<label for="id">Document id:</label>
		<input
			type="text"
			name="id"
			class="border-b-2 bg-gray-100 hover:bg-gray-200  mb-2 h-8 hover:no-underline"
			required
		/>
		<Button>Delete Category</Button>
	</form> -->
</div>
