<script>
	import { stickers } from '../api/sticker';
	import Carousel from 'svelte-carousel';
	import Button from '../reusable/button.svelte';
	import DashainStickers from './dashainStickers.svelte';
	let stickerArray = [];
	stickerArray = [...stickers.stickerData];
</script>

<div
	class="w-64
 flex  text-black"
>
	<Carousel particlesToShow={2} particlesToScroll={2} autoplay autoplayDuration={2000} dots={false}>
		<div id="drag-items" class="flex ">
			<!-- {#each stickerArray as item, index}
				<img src={item.src} alt="" class="w-12 " />
			{/each} -->
			<div
				class="duration-700 ease-in-out  inset-0 transition-all transform translate-x-0 flex  mx-4 "
				data-carousel-item="active"
			>
				<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hand.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			</div>
		</div>
	</Carousel>
</div>

<!-- The button to open modal -->
<div class="flex justify-end  mt-4 mr-5">
	<Button>
		<label for="my-modal-sticker" class=" modal-button">
			<span class="font-bold "> Show All..</span>
		</label>
	</Button>
</div>
<input type="checkbox" id="my-modal-sticker" class="modal-toggle " />
<label
	for="my-modal-sticker"
	class="modal cursor-pointer bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl bg-opacity-50  border border-gray-100"
>
	<label class="modal-box relative" for=""> <DashainStickers /> </label>
</label>

<!-- 
<script>
	import SvelteStickers from '../reusable/svelteStickers.svelte'
</script>

<SvelteStickers/> -->
