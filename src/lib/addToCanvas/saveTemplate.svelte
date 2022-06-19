<script>
	import Form from '$lib/reusable/form.svelte';

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
	import { firebaseConfig } from '../../utils/firebaseConfig';

	onMount(() => {
		//init firebase app

		//init database services
		const db = getFirestore();

		//collection ref
		const colRef = collection(db, 'Ecards');

		//queries
		// const q= query_selector_all(colRef,where("priority","==","20"))

		//real time get collection data
		onSnapshot(colRef, (snapshot) => {
			var Ecards = [];

			snapshot.docs.forEach((doc) => {
				Ecards.push({
					...doc.data(),
					Id: doc.id,
					title: doc.title,
					tags: doc.tags,
					priority: doc.priority
				});
			});
			console.log(Ecards);

			let ulTags = document.getElementById('ecardUlTags');
			let ulTitle = document.getElementById('ecardUlTitle');
			let ulPriority = document.getElementById('ecardUlPriority');
			let ulId = document.getElementById('ecardUlId');

			Ecards.forEach((Ecards, index) => {
				let li1 = document.createElement('li');
				let li2 = document.createElement('li');
				let li3 = document.createElement('li');

				let li4 = document.createElement('li');
				let li5 = document.createElement('li');
				let li6 = document.createElement('li');

				let li7 = document.createElement('li');
				let li8 = document.createElement('li');
				let li9 = document.createElement('li');

				let li10 = document.createElement('li');
				let li11 = document.createElement('li');
				let li12 = document.createElement('li');

				ulTags.appendChild(li1);
				ulTags.appendChild(li2);
				ulTags.appendChild(li3);

				ulTitle.appendChild(li4);
				ulTitle.appendChild(li5);
				ulTitle.appendChild(li6);

				ulPriority.appendChild(li7);
				ulPriority.appendChild(li8);
				ulPriority.appendChild(li9);

				ulId.appendChild(li10);
				ulId.appendChild(li11);
				ulId.appendChild(li12);

				let p = document.createElement('p');
				let pText = document.createTextNode(Ecards.Tags);

				let p2 = document.createElement('p');
				let pTextTitle = document.createTextNode(Ecards.Title);

				let p3 = document.createElement('p');
				let pTextPriority = document.createTextNode(Ecards.Priority);

				let p4 = document.createElement('p');
				let pTextId = document.createTextNode(Ecards.Id);

				p.appendChild(pText);
				li1.appendChild(p);

				p2.appendChild(pTextTitle);
				li4.appendChild(p2);

				p3.appendChild(pTextPriority);
				li7.appendChild(p3);

				p4.appendChild(pTextId);
				li10.appendChild(p4);
				console.log(index);
				console.log('this is one');
			});

			// to display ecards data in table
			document.getElementById('EcardsDiv').innerHTML = JSON.stringify(Ecards);
		});

		//adding Ecards to fireStore
		const addEcardForm = document.querySelector('.add');
		addEcardForm.addEventListener('submit', (e) => {
			e.preventDefault();

			//look at ecard collection and fill data here
			addDoc(colRef, {
				Title: addEcardForm.title.value,
				Tags: addEcardForm.tags.value,
				Priority: addEcardForm.priority.value
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
		Helllo There
		<Form />

		<div id="table" />
		<div id="EcardsDiv" />
		<div id="heading1" />
	</label>
</label>
