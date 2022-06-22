<script>
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import {
		getFirestore,
		addDoc,
		getDocs,
		deleteDoc,
		doc,
		collection,
		onSnapshot
	} from 'firebase/firestore';
	import { onMount } from 'svelte';

	let Category = [];

	//init database services
	const db = getFirestore();

	//collection ref
	const colRef = collection(db, 'Category');

	onMount(() => {
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Category = [
					...Category,
					{
						...doc.data(),
						Id: doc.id,
						title: doc.title,
						priority: doc.priority,
						publish: doc.publish,
						preview: doc.preview
					}
				];
			});
		});
	});
</script>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Category Name</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		{#each Category as card}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2">{card.Id}</td>
				<td class=" px-8 py-2">{card.Name}</td>

				<td class=" px-8 py-2">{card.Priority}</td>
				<td class=" px-8 py-2">{card.Publish}</td>

				<td class=" px-8 py-2"><img class="w-8 h-auto" src={card.Preview} alt="" /></td>
				<td>
					<div class="collapse">
						<input type="checkbox" class="peer" />
						<div class="collapse-title ">
							<Button>:</Button>
						</div>
						<div class="collapse-content  ">
							<div class="  justify-center relative   " id="toggleContent">
								<ul class="  h-auto  ">
									<div class="flex justify-around items-center mb-2">
										<li class="   text-sm w-8">
											<a href="/" title="Edit">
												<span><FaEdit /></span>
											</a>
										</li>
										<li class=" text-sm  w-8">
											<a href="/" title="Delete"> <MdDelete /></a>
										</li>
										<!-- <div class="flex justify-around items-center"> -->
											<li class="  text-sm  w-8 ">
											<a href="/" title="Clone"> <MdContentCopy /> </a>
										</li>
										<li class="  text-sm   w-8">
											<a href="/" title="Mark as Trending"> <DiMarkdown /> </a>
										</li>
									<!-- </div> -->
								</div>
								</ul>
							</div>
						</div>
					</div>
				</td>
			</tr>
		{/each}
	</table>
</div>
