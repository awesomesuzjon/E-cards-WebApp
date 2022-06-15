<script>
	import { previewtbl, previewImgFunc } from '../../utils/previewImgntbl';
	import Pagination from '../reusable/pagination.svelte';
	import Button from '../reusable/button.svelte';
</script>

<!-- </div> -->
<div class="flex  ">
	<img
		id="targetContent"
		class="z-50    absolute w-4/12 h-4/5 hidden   justify-center"
		src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/holi-design-template-44ce589f65c0ac4315a373fff00def9d_screen.jpg?ts=1600223391"
		alt=""
	/>

	<!-- <div class="relative"> -->
	<table
		class="shadow-lg text-sm w-full mx-5   bg-white  dark:bg-gray-800 dark:text-gray-100  "
	>
		<tr id="templatesTableRow" class="">
			<th class="bg-red-700 border text-white  px-8 py-4 text-center dark:bg-gray-800 ">Id</th>
			<th class="bg-red-700 border text-white px-8 py-4 dark:bg-gray-800  ">Title</th>
			<th class="bg-red-700 border text-white px-8 py-4 dark:bg-gray-800 "> Preview</th>
			<th class="bg-red-700 border text-white px-8 py-4 dark:bg-gray-800 "> Tags</th>
			<th class="bg-red-700 border text-white px-8 py-4 dark:bg-gray-800 ">Publish</th>
			<th class="bg-red-700 border text-white px-8 py-4 dark:bg-gray-800 ">Action</th>
		</tr>
		<tr>
			<td class="border px-8 py-4">1</td>
			<td class="border px-8 py-4">Holi Templates</td>
			<td class="border px-8 py-4 " id="toggleImgBtn">
				<span><button on:click={previewImgFunc}>👁</button></span>
			</td>

			<td class="border px-8 py-4">Tag1</td>

			<td class="border px-8 py-4">No</td>
			<td class="border px-8 py-4">
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- <button class="btn" on:click={previewtbl}>:</button> -->
				<a on:click={previewtbl} id="toggleTblBtn" class="p-0 text-sm" title="Bold"
					><Button>
						<span class="font-bold "> :</span>
					</Button></a
				>
			</td>

			<!-- dropwdown action button -->

			<div class="  justify-center relative z-10  hidden " id="toggleContent">
				<ul class="w-50  h-auto absolute top-0 -ml-28 mt-16 center border-gray-500 border">
					<li class=" bg-gray-200  text-sm border border-b-gray-500 ">
						<a href="/">Publish/Unpublish</a>
					</li>
					<li class=" bg-gray-200  text-sm border  border-b-gray-500">
						<a href="/">Edit</a>
					</li>
					<li class=" bg-gray-200 text-sm border  border-b-gray-500">
						<a href="/">Delete</a>
					</li>
					<li class=" bg-gray-200  text-sm border border-b-gray-500 ">
						<a href="/">Mark as Trending</a>
					</li>
					<li class=" bg-gray-200  text-sm border  ">
						<a href="/">Clone</a>
					</li>
				</ul>
			</div>
		</tr>
		<tr>
			<td class="border px-8 py-4">2</td>
			<td class="border px-8 py-4">Dashain Templates</td>
			<td class="border px-8 py-4"><span>👁</span></td>
			<td class="border px-8 py-4">Tag2</td>

			<td class="border px-8 py-4">No</td>
			<td class="border px-8 py-4"><a on:click={previewtbl}><Button>::</Button></a> </td>
		</tr>

		<tr>
			<td class="border px-8 py-4">3</td>
			<td class="border px-8 py-4">NewYear Templates</td>
			<td class="border px-8 py-4"><span>👁</span></td>
			<td class="border px-8 py-4">Tag3</td>

			<td class="border px-8 py-4">No</td>
			<td class="border px-8 py-4"><Button>:</Button></td>
		</tr>
		<tr>
			<td class="border px-8 py-4">4</td>
			<td class="border px-8 py-4">NewYear Templates</td>
			<td class="border px-8 py-4"><span>👁</span></td>
			<td class="border px-8 py-4">Tag4</td>

			<td class="border px-8 py-4">No</td>
			<td class="border px-8 py-4"><Button>:</Button></td>
		</tr>
	</table>
</div>
<!-- </div>   -->

<Pagination />

<!-- <button id="toggle" class="btn mt-50 ml-40 ">button</button> -->
