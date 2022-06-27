<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';

	let files;
	let uploadValue;


	function addFile(e) {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			uploadValue = e.target.result;
		};
	}

	const db = getFirestore();

	const colRef = collection(db, 'Category');

	const storeNewValues = () => {
		const addCategoryForm = document.querySelector('.addCategoryForm');
		addDoc(colRef, {
			Name: addCategoryForm.name.value,
			Priority: addCategoryForm.priority.value,
			Publish: addCategoryForm.publish.value,
			Preview: uploadValue
		})
			.then((e) => {
				// console.log('the value of e ', e);
				addCategoryForm.reset();
			})
			.catch((err) => {
				console.log('sometihng went wrong while uploading to firestore');
			});
	};

	const deleteValuesFromStore = () => {
		const deleteCategoryForm = document.querySelector('.deleteCategory');

		deleteCategoryForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const docRef = doc(db, 'Category', deleteCategoryForm.id.value);
			deleteDoc(docRef).then(() => {
				deleteCategoryForm.reset();
			});
		});
	};
</script>

<div class="flex flex-col justify-center items-center text-sm ">
	<form
		class="addCategoryForm text-sm"
		on:submit={(e) => {
			e.preventDefault();
			storeNewValues();
		}}
	>
		<div class="my-2 text-sm">
			<label for="name">Name :</label>
			<input
				type="text"
				name="name"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
			/>
		</div>
		<div>
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

	
		<div class="flex justify-center my-4">
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
		</div>
		<div class=" my-2">
			<input type="checkbox" name="publish"  />
			<span> Publish </span>
		</div>

		<!-- svelte-ignore a11y-missing-attribute -->
		<Button>Add Category</Button>
	</form>
	<form
		class="deleteCategory text-sm mt-2  flex flex-col "
		on:submit={(e) => {
			deleteValuesFromStore();
			e.preventDefault();
		}}
	>
		<label for="id" >Document id:</label>
		<input
			type="text"
			name="id"
			class="border-b-2 bg-gray-100 hover:bg-gray-200  mb-2 h-8 hover:no-underline"
			required
		/>
		<Button>Delete Category</Button>
	</form>
</div>
