<script>
	import KonvaAddText from '$lib/konva/konvaAddText.svelte';
	import KonvaImgDrag from '$lib/konva/konvaImgDrag.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import SaveTemplate from '../addToCanvas/saveTemplate.svelte';
	import Button from '../reusable/button.svelte';
	import Stage from '../../lib/konva/stage.svelte';
	import Layer from '../../lib/konva/layer.svelte';
	import MessageTabs from '../addToCanvas/message/messageTabs.svelte';
</script>

<div id="canvasContainer" class=" flex w-9/12   flex-col   items-center ">
	<div
		id="canvasHolder"
		class="  text-black dark:text-white cursor-move w-full h-4/6 mt-16 ml-7  self-center  border-8 bg-gray-100  "
	>
		<div
			id="canvasImgContainer"
			class=" flex z-0 items-center justify-center relative  content-center "
		/>

		<Stage>
			<Layer>
				<!-- <div class="textDivCanvas "> -->
				<KonvaImgDrag />
				<KonvaAddText />
				<!-- </div> -->
			</Layer>
		</Stage>
	</div>
	<div>
		<p class="text-sm my-2 text-black dark:text-white">
			<strong>Tip:</strong> Drag the Stickers from the sidebar.
		</p>
		<Button>
			<button id="saveAsImg">Save as Img</button>
		</Button>
		<SaveTemplate />
	</div>
</div>

<section>
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
</section>
<!-- </div> -->
