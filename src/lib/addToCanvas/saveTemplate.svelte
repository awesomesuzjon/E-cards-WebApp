<script>

	//fireStore used from here to save form inputs on firebase Database
	import { initializeApp } from 'firebase/app';
	import {
		getFirestore,
		addDoc,
		getDocs,
		deleteDoc,
		doc,
		collection,
		where,
		onSnapshot
	} from 'firebase/firestore';
	import { onMount } from 'svelte';
import AddtemplateForm from '../forms/addTemplateForm.svelte';

	onMount(() => {
		//init database services
		const db = getFirestore();

		//collection ref
		const colRef = collection(db, 'Ecards');

		//real time get collection data
		onSnapshot(colRef, (snapshot) => {
			var Ecards = [];

			snapshot.docs.forEach((doc) => {
				Ecards.push({
					...doc.data(),
					Id: doc.id,
					title: doc.title,
					tags: doc.tags,
					category: doc.category,
					priority: doc.priority,
					publish: doc.publish
				});
			});
		});

		//adding Ecards to fireStore
		const addEcardForm = document.querySelector('.addTemplateForm');
		addEcardForm.addEventListener('submit', (e) => {
			e.preventDefault();

			//look at ecard collection and fill data here
			addDoc(colRef, {
				Title: addEcardForm.title.value,
				Tags: addEcardForm.tags.value,
				Category: addEcardForm.category.value,
				Priority: addEcardForm.priority.value,
				Publish: addEcardForm.publish.value
			}).then(() => {
				addEcardForm.reset();
			});
		});

		//deleting document
		const deleteEcardForm = document.querySelector('.delete');
		deleteEcardForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const docRef = doc(db, 'Ecards', deleteEcardForm.id.value);
			deleteDoc(docRef).then(() => {
				deleteEcardForm.reset();
			});
		});
	});
</script>

<label
	for="my-modal-5"
	class="btn modal-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white  btn-gray-50 center  text-sm p-2"
	>Save</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<label for="my-modal-5" class="modal cursor-pointer">
	<label class="modal-box  text-sm relative" for="">
<AddtemplateForm/>
		<div id="table" />
		<div id="EcardsDiv" />
		<div id="heading1" />
	</label>
</label>
