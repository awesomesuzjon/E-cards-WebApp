<script>
	import Firebaselogin from '../lib/firebase/firebaselogin.svelte';
	import axios from 'axios';
	import { stickers } from '../lib/api/sticker';
	let url = 'sticker.json';
	// let url = 'https://jsonplaceholder.typicode.com/todos/1';

	console.log('stickers', stickers);
	// axios.get(url).then((res) => console.log(res.data));
</script>

<Firebaselogin />
