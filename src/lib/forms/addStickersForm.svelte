<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	let files;
	let uploadValue;

	const db = getFirestore();

	const colRef = collection(db, 'Stickers');

	const storeNewStickerValues = () => {
		const addStickerForm = document.querySelector('.addStickerForm');
		addDoc(colRef, {
			Name: addStickerForm.name.value,
			Category: addStickerForm.category.value,
			Priority: addStickerForm.priority.value,
			Preview: uploadValue
		})
			.then((e) => {
				addStickerForm.reset();
			})
			.catch((err) => {
				console.log('sometihng went wrong on stickerstable while uploading to firestore');
			});
	};

	export const deleteValues = () => {
		const deleteStickerForm = document.querySelector('.deleteStickerForm');

		deleteStickerForm.addEventListener('submit', (e) => {
			e.preventDefault();
			//delete row on table through input id value
			const docRef = doc(db, 'Stickers', deleteStickerForm.id.value);
			deleteDoc(docRef).then(() => {
				deleteStickerForm.reset();
			});
		});
	};
</script>

<div class="flex flex-col justify-center items-center text-sm my-4">
	<form
		class="addStickerForm text-lg"
		on:submit={(e) => {
			e.preventDefault();
			storeNewStickerValues();
		}}
	>
		<div class="my-2">
			<label for="name">Sticker Name:</label>
			<input
				type="text"
				name="name"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 h-8 hover:no-underline"
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
				on:change={(e) => {
					{
						///file reader code to convert upload img url with base64
					
						////
						uploadValue = e?.target?.files[0]?.name?.toString();
					}
				}}
			/>
		</div>
		<div class="my-4">
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priority"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200  h-8 hover:no-underline"
			/>
		</div>

		<div class="flex my-4 items-center">
			<label
				class=" my-2 label-optional label-optional-personal label-required-public"
				for="CategoryId"><h1>Category:</h1></label
			>
			<select id="CategoryId" name="category" class=" text-sm h-8 mx-2" required>
				<option value="">Select a category</option>
				<option value="Birthday">Dashain</option>
				<option value="Love">Tihar</option>
				<option value="Friendship">Birthday</option>
				<option value="Thank You">Thank You</option>
				<option value="Get Well">Get Well</option>
				<option value="Congratulations">Congratulations</option>
				<option value="Festival">Festival</option>
				<option value="Other">Other...</option>
			</select>
		</div>

		<Button>Add Sticker</Button>
	</form>

	<form
		class="deleteStickerForm text-lg mt-2  flex flex-col "
		on:submit={(e) => {
			deleteValues();
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
		<Button>Delete Sticker</Button>
	</form>
</div>
