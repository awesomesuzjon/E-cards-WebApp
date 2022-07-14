<!-- <script>
	//fireStore used from here to save form inputs on firebase Database
	import { initializeApp } from 'firebase/app';
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import AddCategory from '../reusable/addCategory.svelte';

	onMount(() => {
		//init database services
		const db = getFirestore();

		//collection ref
		const colRef = collection(db, 'Category');

		//real time get collection data
		onSnapshot(colRef, (snapshot) => {
			var Category = [];

			snapshot.docs.forEach((doc) => {
				Category.push({
					...doc.data(),
					Id: doc.id,
					name: doc.name,
					priority: doc.priority,
					publish: doc.publish,
					preview: doc.preview
				});
			});

			// to display ecards data in table
			// document.getElementById('jsonDiv').innerHTML = JSON.stringify(Category);
		});

		//adding Ecards to fireStore
		const addCategoryForm = document.querySelector('.addCategoryForm');
		addCategoryForm.addEventListener('submit', (e) => {
			// e.preventDefault();
			console.log('the preview image is ', addCategoryForm.preview.value);
			//look at ecard collection and fill data here
			// addDoc(colRef, {
			// 	Name: addCategoryForm.name.value,
			// 	Priority: addCategoryForm.priority.value,
			// 	Publish: addCategoryForm.publish.value,
			// 	Preview: addCategoryForm.preview.value
			// }).then(() => {
			// 	addCategoryForm.reset();
			// });
		});
		//deleting document
		const deleteCategoryForm = document.querySelector('.deleteCategory');
		deleteCategoryForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const docRef = doc(db, 'Category', deleteCategoryForm.id.value);
			deleteDoc(docRef).then(() => {
				deleteCategoryForm.reset();
			});
		});
	});
</script>

<label
	for="my-modal-5"
	class="btn modal-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white  btn-gray-50 center  text-sm p-2"
	>Save</label
>
hi <AddCategory /> -->
