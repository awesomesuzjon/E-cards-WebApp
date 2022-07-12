<script>
	import Button from '../reusable/button.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import DiMarkdown from 'svelte-icons/di/DiMarkdown.svelte';
	import { getFirestore, addDoc, deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
	import Pagination from '../reusable/pagination.svelte';
	import { onMount } from 'svelte';
	var stickerArr = [];

	onMount(() => {
		//grpc backend data
		let url = 'http://192.168.86.107:8090/get/stickers';
		fetch(url).then((res) => {
			res.json().then((data) => {
				stickerArr = data?.allStickerList ?? [];
				// categoryArr = data;
				console.log(stickerArr);
			});
		});

		//firebase code
		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				Stickers = [
					...Stickers,
					{
						...doc.data(),
						Id: doc.id
					}
				];
			});
		});
	});
	//initialiaze an array to store stickers from firestore
	var Stickers = [];
	$: Stickers = [];

	//init database services
	const db = getFirestore();

	//collection ref
	const colRef = collection(db, 'Stickers');

	// pagination code
	let paginatedItems = [];
	$: paginatedItems;

	//image src
	function getImgSrc(e) {
		console.log(target.Id);
	}
</script>

<div class="flex mt-4 ">
	<table class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  ">
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 dark:bg-gray-800">
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th class="bg-red-700  text-white  px-8 py-2 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800  ">Sticker Name</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Priority</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 "> Category</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Mark as Trending</th>
			
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Preview</th>
			<th class="bg-red-700  text-white px-8 py-2 dark:bg-gray-800 ">Action</th>
		</tr>

		<!-- {#each paginatedItems as item} -->
		{#each stickerArr as item}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td class=" px-8 py-2 text-black">{item.id}</td>
				<td class=" px-8 py-2">{item.name}</td>

				<td class=" px-8 py-2">{item.priority}</td>
				<td class=" px-8 py-2">{item.category}</td>

				<td class=" px-8 py-2">{item.isTrending}</td>
				<td class=" px-8 py-2">{item.publish}</td>
				<td class=" px-8 py-2">
					<!-- aa -->
					<div class="flex justify-end  mt-4 mr-5">
						<label for="my-modal" class=" modal-button">
							<img class="w-4 h-auto flex justify-center items-center" src={item.preview} alt="" />
						</label>
					</div>

					<input type="checkbox" id="my-modal" class="modal-toggle " />
					<label
						for="my-modal"
						class="modal cursor-pointer bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl bg-opacity-50  border border-gray-100"
					>
						<label class="modal-box relative" for="">
							<img
								class="w-full h-auto flex justify-center items-center"
								alt=""
								src={item.Preview}
							/>
						</label>
					</label>
					<!-- bb -->
				</td>
				<td>
					<div class="flex justify-around items-center mb-2 list-none">
						<li class="   text-sm w-4">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a title="Edit">
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

									const docRef = doc(db, 'Stickers', item.Id);
									deleteDoc(docRef);
								}}
							>
								<MdDelete /></a
							> --><MdDelete
							/>
						</li>
						<!-- <div class="flex justify-around items-center"> -->
						<li class="  text-sm  w-4 ">
							<a href="/" title="Clone"> <MdContentCopy /> </a>
						</li>
						<li class="  text-sm   w-4">
							<a href="/" title="Mark as Trending"> <DiMarkdown /> </a>
						</li>
						<!-- </div> -->
					</div>
					<!-- </ul>
							</div>
						</div>
					</div> -->
				</td>
			</tr>
		{/each}
	</table>
</div>
<div class="mx-5">
	<Pagination items={Stickers} bind:paginatedItems />
</div>
