<script>
	import { stickers } from '../api/sticker';
	import Carousel from 'svelte-carousel';
	import Button from '../reusable/button.svelte';
	import DashainStickers from './dashainStickers.svelte';
	// stickerArray = [...stickers.stickerData];
	import { stickerTabStore } from '../../stores/stickerTab';
	import { onMount } from 'svelte';
	import { globalUrl } from '../../utils/urls';
	onMount(() => {
		async function getSticker() {
			try {
				const stickerUrl = `${globalUrl}/sticker/show-all-stickers`;
				const data = await (await fetch(stickerUrl)).json();
				stickerTabStore.set(data.allStickerList);
			} catch (e) {
				console.log('error', e);
			}
		}
		getSticker();
	});
</script>

<div
	class="w-64
 flex  text-black"
>
	<Carousel particlesToShow={2} particlesToScroll={2} autoplay autoplayDuration={2000} dots={false}>
		<div id="drag-items" class="flex ">
			{#each $stickerTabStore as item}
				<div
					class="duration-700 ease-in-out  inset-0 transition-all transform translate-x-0 flex  mx-4 "
					data-carousel-item="active"
				>
					<img src={item.url} class="rounded-full w-12 block mx-2" alt="..." />
				</div>
			{/each}
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
