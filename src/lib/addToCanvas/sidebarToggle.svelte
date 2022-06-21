<script>
	import SaveTemplate from '../addToCanvas/saveTemplate.svelte';
	import KonvaAddText from '$lib/konva/konvaAddText.svelte';
	import KonvaImgDrag from '$lib/konva/konvaImgDrag.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import Stage from '../../lib/konva/stage.svelte';
	import Layer from '../../lib/konva/layer.svelte';
	import Stickers from '../addToCanvas/stickers.svelte';
	import ElementPushToCanvas from '../addToCanvas/elementPushToCanvas.svelte';
	import EditSidebar from '../dropDownEditbar/editsidebar.svelte';
	import AddMessage from './message/addMessage.svelte';

	import MessageTabs from '../addToCanvas/message/messageTabs.svelte';
	import CanvasBackgroundImg from './canvasBackgroundImg.svelte';
</script>

<div class="flex justify-between items-center ">
	<div class="drawer  z-50 " style="width:10em;">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div
			class="imgcontainer drawer-side   
		  "
		>
			<label for="my-drawer" class="drawer-overlay" />
			<ul class=" divide-y-2 w-full bg-red-300  text-sm text-white">
				<li class="p-2 ">
					<ElementPushToCanvas />
				</li>
				<li class="p-2 ">
					<AddMessage />
				</li>
				<li class="p-2">
					<Stickers />
				</li>
				<li class="p-2">
					<CanvasBackgroundImg />
				</li>
			</ul>
		</div>
	</div>

	<label for="my-drawer" class=" btn p-2 w-10 h-8 drawer-button    justify-left ">
		<h6 class="text-sm w-6  h-auto p-1"><FaAngleRight /></h6>
	</label>

	<div id="canvasContainer" class=" flex    items-center ">
		<div
			id="canvasHolder"
			style="width:15em;height:450px"
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

		<input type="checkbox" id="my-modal-4" class="modal-toggle" />
		<label for="my-modal-4" class="modal cursor-pointer">
			<label
				class="modal-box  relative
			 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 text-white border border-gray-100
			"
				for=""
				id="msgModalContainer"
			>
				<MessageTabs />
			</label>
		</label>
	</div>
	<EditSidebar />
</div>
<p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>

<div>
	<button class="btn" id="saveAsPdf">Save as PDF</button>
	<button class="btn" id="saveAsImg">Save as Img</button>

	<SaveTemplate />
</div>
