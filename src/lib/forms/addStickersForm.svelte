<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let files;
	let uploadValue;

	var categoryOptionArr = [];
	let categoryOptions = 'http://192.168.86.54:8090/category/list-names';
	onMount(() => {
		fetch(categoryOptions).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.category_list ?? [];
				// categoryArr = data;
			});
		});
	});

	// const db = getFirestore();

	// const colRef = collection(db, 'Stickers');

	// const storeNewStickerValues = () => {
	// 	const addStickerForm = document.querySelector('.addStickerForm');
	// 	addDoc(colRef, {
	// 		Name: addStickerForm.name.value,
	// 		Category: addStickerForm.category.value,
	// 		Priority: addStickerForm.priority.value,
	// 		Preview: uploadValue
	// 	})
	// 		.then((e) => {
	// 			addStickerForm.reset();
	// 		})
	// 		.catch((err) => {
	// 			console.log('sometihng went wrong on stickerstable while uploading to firestore');
	// 		});
	// };

	// export const deleteValues = () => {
	// 	const deleteStickerForm = document.querySelector('.deleteStickerForm');

	// 	deleteStickerForm.addEventListener('submit', (e) => {
	// 		e.preventDefault();
	// 		//delete row on table through input id value
	// 		const docRef = doc(db, 'Stickers', deleteStickerForm.id.value);
	// 		deleteDoc(docRef).then(() => {
	// 			deleteStickerForm.reset();
	// 		});
	// 	});
	// };

	var uploadImageSrc;
	function addFile(e) {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			var uploadImageSrc = e.target.result;
			console.log(uploadImageSrc);
		};
	}
	let ImageSrc = 'admin.png';
	async function postSticker() {
		var nameInput = document.getElementById('nameSticker')?.value;
		// var ImageSrc = uploadImageSrc;
		// var imgSrc = document.getElementById('imgUpload').value;
		var priorityInput = document.getElementById('prioritySticker')?.value;
		var categoryInput = document.getElementById('categorySticker')?.selectedOptions[0].value;
		var publishInput = document.getElementById('publishSticker')?.checked;
		let data = {
			name: nameInput,
			url: ImageSrc,
			priority: Number(priorityInput),
			category: categoryInput,
			publish: publishInput
		};
		axios
			.post('http://192.168.86.54:8090/save/sticker', data)
			.then(function (response) {
				console.log('Successfully Posted Article', response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
</script>

<div class="flex flex-col justify-center items-center text-sm my-4  p-2">
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
				class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div class="my-4">
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="prioritySticker"
				id="prioritySticker"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

		<div class="flex justify-center my-4">
			<label for="name">Upload Sticker : </label>
			<input
				type="file"
				id="imgUpload"
				class="w-60 mx-2"
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
