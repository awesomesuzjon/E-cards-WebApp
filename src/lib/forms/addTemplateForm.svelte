<script>
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Button from '../reusable/button.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';

	//category dropdown
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
	//form value data collection
	let ImageSrc = 'ballon.jpg';
	async function postTemplate() {
		var nameInput = document.getElementById('nameTemplate')?.value;
		console.log(nameInput, 'nameInput');
		// var ImageSrc = uploadImageSrc;
		var priorityInput = document.getElementById('priorityTemplate')?.value;
		console.log(priorityInput, 'priorityInput');

		var tagInput = document.getElementById('tagTemplate')?.value;

		var categoryInput = document.getElementById('categoryTemplate')?.selectedOptions[0].value;
		console.log(categoryInput, 'categoryInput');

		// var publishInput = document.getElementById('publishTemplate')?.checked;

		let data = {
			title: nameInput,
			url: ImageSrc,
			tags: tagInput,
			priority: Number(priorityInput),
			category_name: categoryInput
			// publish: publishInput
		};

		axios
			.post('http://192.168.86.54:8090/template/save', data)
			.then(function (response) {
				console.log('Successfully Added Template To Table', response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
</script>

<div class="flex flex-col justify-center items-center text-sm ">
	<div class=" w-80">
		<form
			on:submit={(e) => {
				postTemplate();
				e.preventDefault();
			}}
			class="addTemplateForm flex flex-col text-sm justify-center items-center "
		>
			<label for="title">Title:</label>
			<input
				type="text"
				name="nameTemplate"
				id="nameTemplate"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8 hover:no-underline"
			/>
			<label for="priority">Priority:</label>
			<input
				type="number"
				name="priorityTemplate"
				id="priorityTemplate"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full  h-8 hover:no-underline"
			/>

			<label for="tags">Tags:</label>
			<span class=" ml-8 italic bold text-sm">Separate tags with comma (,)</span>
			<input
				type="text"
				name="tags"
				id="tagTemplate"
				required
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8  hover:no-underline"
			/>

			<div class="flex my-4 items-center">
				<label
					class=" my-2 label-optional label-optional-personal label-required-public"
					for="categoryTemplate"><h1>Category:</h1></label
				>
				<select id="categoryTemplate" name="categoryTemplate" class=" text-sm h-8 mx-2" required>
					<option value="">Select a category</option>
					{#each categoryOptionArr as item}
						<option value={item}>{item}</option>\
					{/each}
				</select>
			</div>
			<br />
			<!-- <div class="flex my-4">
				<input type="checkbox" name="publishTemplate" id="publishTemplate" class="mx-2" />
				<span>Publish</span>
			</div> -->
			<button class="btn  flex-col flex">Add Template</button>
		</form>
		<!-- <form class="delete text-lg ">	
			<label for="id">Document id:</label>
			<input
				type="text"
				name="id"
				class="border-b-2 bg-gray-100 hover:bg-gray-200 w-full h-8  hover:no-underline"
				required
			/>

			<button class="btn my-4">Delete</button>
		</form> -->
	</div>
</div>
