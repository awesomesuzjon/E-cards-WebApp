<script>
	import Form from '$lib/reusable/form.svelte';
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
	import { query_selector_all } from 'svelte/internal';
	import { firebaseConfig } from '../utils/firebaseConfig';

	onMount(() => {
		//init firebase app
		const firebaseApp = initializeApp(firebaseConfig);

		//init database services
		const db = getFirestore();

		//collection ref
		const colRef = collection(db, 'Ecards');

		//queries
		// const q= query_selector_all(colRef,where("priority","==","20"))

		//real time get collection data
		onSnapshot(colRef, (snapshot) => {
			let Ecards = [];
			snapshot.docs.forEach((doc) => {
				Ecards.push({
					...doc.data(),
					id: doc.id
				});
			});
			console.log(Ecards);

			//to display ecards data in table
			//  function funCall(){
			//       Ecards
			//       console.log(Ecards[0].title)
			//      var html = "<table border='1|1'>"
			//         setTimeout(()=>{
			//             for (var i=0;i<Ecards.length;i++){
			//                 html +='<tr>'
			//                 html +='<td>'+Ecards[i].id+'</td>'
			//                 html +='<td>'+Ecards[i].title+'</td>'
			//                 html +='<td>'+Ecards[i].tags+'</td>'
			//                 html +='<td>'+Ecards[i].priority+'</td>'
			//                 html +='</tr>'

			//             }
			//             document.getElementById('table').innerHTML=html
			//         },500)
			//  }
			//         funCall()
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

Helllo There
<Form />

<div id="table" />
