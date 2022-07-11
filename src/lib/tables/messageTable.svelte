<script>
	import Button from '../reusable/button.svelte';
	import AddMessagesForm from '../forms/AddMessagesForm.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';

	import { onMount } from 'svelte';
	let url = 'http://192.168.86.55:8090/get/messages';
	// let url = 'https://jsonplaceholder.typicode.com/todos/';
	export var messageArr = [];
	onMount(() => {
		fetch(url).then((res) => {
			res.json().then((data) => {
				messageArr = data?.allMessageList ?? [];
				// categoryArr = data;
				console.log(messageArr);
			});
		});
	});
</script>

<svelte:head>
	<title>Messages</title>
</svelte:head>

<div class="flex justify-end  mt-4 mr-5">
	<Button>
		<label for="my-modal-4" class=" modal-button">
			<span class="font-bold "> Add new Message +</span>
		</label>
	</Button>
</div>
<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<AddMessagesForm />
	</label>
</label>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 dark:bg-gray-800">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Message</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Mark as Trending</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>

			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		{#each messageArr as item}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2 text-black">{item.id}</td>
				<td class=" px-8 py-2">{item.message}</td>

				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.isTrending}</td>
				<td class=" px-8 py-2">{item.publish}</td>

				<td class=" px-8 py-2"><img class="w-4 h-auto" src={item.Preview} alt="" /></td>
				<td>
					<div class="flex justify-around items-center mb-2 list-none">
						<li class="   text-sm w-4">
							<a href="/" title="Edit">
								<span><FaEdit /></span>
							</a>
						</li>
						<li class=" text-sm  w-4 hover:bg-gray-300 p-0 cursor:move ">
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- <a
								title="Delete"
							 on:click={//delete row on table through delete button
								(e) => {
									e.stopPropagation();

									const docRef = doc(db, 'Category', item.Id);
									deleteDoc(docRef);
								}} 
							>
								<MdDelete /></a -->
							<MdDelete />
						</li>

						<li class="  text-sm  w-4 ">
							<a href="/" title="Clone"> <MdContentCopy /> </a>
						</li>
						<li class="  text-sm   w-4">
							<a href="/" title="Mark as Trending"> <DiMarkdown /> </a>
						</li>
					</div>
				</td>
			</tr>
		{/each}
	</table>
</div>
