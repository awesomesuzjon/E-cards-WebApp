<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';

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

	async function postArticle(data) {
		axios
			.post('http://192.168.86.107:8090/save/catagory', data)
			.then(function (response) {
				console.log('Successfully Posted Article', response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	// var nameInput = document.getElementById('fname').value;
	// var priorityInput = document.getElementById('priority').value;
	// var publishInput = document.getElementById('publish').value;
	// var isTrendingInput = document.getElementById('isTrending').value;

	let data = {
		name: 'dashain',
		priority: 3,
		publish: false,
		isTrending: false
		// name: nameInput.value,
		// priority: priorityInput.value,
		// publish: publishInput.value,
		// isTrending: isTrendingInput.value
	};
	console.log(data);

	// <!-- <button on:click={()=>postArticle(data)}>here</button> -->
</script>

<div class="flex flex-col justify-center items-center text-sm ">
	<form
		class="addCategoryForm text-sm"
		on:submit={(e) => {
			postArticle(data);
			e.preventDefault();
		}}
	>
		<div class="my-2 text-sm">
			<label for="name">Name :</label>
			<input
				type="text"
				id="fname"
				name="name"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div>
			<label for="priority">Priority:</label>
			<input
				type="number"
				id="priority"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

		<!-- <div class="flex justify-center my-4">
			<label for="preview">Upload Image : </label>
			<input
				type="file"
				id="imgUpload"
				class="w-60 mx-2"
				accept="image/*"
				name="preview"
				bind:files
				on:change={addFile}
			/>
		</div> -->
		<div class=" my-2">
			<input type="checkbox" value="false" name="publish" id="publish" />
			<span> Publish </span>
		</div>
		<div class=" my-2">
			<input type="checkbox" value="false" name="isTrending" id="isTrending" />
			<span> isTrending </span>
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
