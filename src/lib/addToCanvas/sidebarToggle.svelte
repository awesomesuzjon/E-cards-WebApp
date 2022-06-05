<script>
	import SaveTemplate from '../addToCanvas/saveTemplate.svelte';
	import KonvaAddText from '$lib/konva/konvaAddText.svelte';
	import KonvaImgDrag from '$lib/konva/konvaImgDrag.svelte';
	import { allowDrop, drag, drop } from '../../routes/dragdropclone.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import Stage from '../../lib/konva/stage.svelte';
	import Layer from '../../lib/konva/layer.svelte';
	import Stickers from '../addToCanvas/stickers.svelte';
	import ElementPushToCanvas from '../addToCanvas/elementPushToCanvas.svelte';
	import EditSidebar from '../dropDownEditbar/editsidebar.svelte';
	import Button from '../reusable/button.svelte';
	import Form from '$lib/reusable/form.svelte';
</script>

<div class="flex justify-between items-center">
	<div class="drawer  z-50 " style="width:10em;">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div
			class="imgcontainer drawer-side   
		  "
		>
			<label for="my-drawer" class="drawer-overlay" />
			<ul class=" divide-y-2 w-full bg-F6F0F0  text-sm text-white">
				<li class="p-4">
					<ElementPushToCanvas />
				</li>
				<li class="p-4">
					<Stickers />
					<!-- <Stickers /> -->
				</li>
			</ul>
		</div>
	</div>

	<label for="my-drawer" class=" btn p-2 w-10 h-8 drawer-button    justify-left ">
		<h6 class="text-sm w-6  h-auto p-1"><FaAngleRight /></h6>
	</label>

	<div id="canvasContainer" class=" flex    items-center 	 h-full">
		<div
			on:drop={drop}
			on:dragover={allowDrop}
			id="canvasHolder"
			style="width:20em;height:450px"
			class="  text-black dark:text-white cursor-move   self-center  border-8 bg-gray-100  "
		>
			<div
				id="canvasImgContainer"
				class=" flex z-0 items-center justify-center relative  content-center "
			/>

			<Stage>
				<Layer>
					<div class="textDivCanvas ">
						<KonvaImgDrag />
						<KonvaAddText />
					</div>
				</Layer>
			</Stage>
		</div>

		<EditSidebar />
	</div>
</div>
<p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>

<div>
	<button class="btn" id="saveAsPdf">Save as PDF</button>
	<button class="btn" id="saveAsImg">Save as Img</button>

	<SaveTemplate />

	<!-- <Form/> -->

	<div class="flex   mt-8">
		<div class="bg-gray-300 ">
			<h1 class="text-lg text-blue mr-4"> Preview Image</h1>
			<img id="imgPreview" src="" class="w-32 h-auto" alt=""/>
		</div>
		<ul id="ecardUlId" class="bg-pink-300 p-4 border-2  text-lg">
			<span class="text-bold text-3xl mb-4 border-bottom">Id</span>
		</ul>
		<ul id="ecardUlTitle" class="bg-pink-300 p-4 border-2 text-lg">
			<span class="text-bold text-3xl ">Title</span>
		</ul>

		<ul id="ecardUlTags" class="bg-pink-300 p-4 border-2 text-lg">
			<span class="text-bold text-3xl ">Tags</span>
		</ul>

		<ul id="ecardUlPriority" class="bg-pink-300 p-4 border-2 text-lg">
			<span class="text-bold text-3xl ">Priority</span>
		</ul>
	</div>
</div>
