<script>
	import Firebaselogin from '../lib/firebase/firebaselogin.svelte';
	import { stickers } from '../lib/api/sticker';

	import SvelteSticker from '../lib/stickers/svelteStickers.svelte';
	let stickerArray = [];
	stickerArray = [...stickers.stickerData];
</script>

<Firebaselogin />

<SvelteSticker />
