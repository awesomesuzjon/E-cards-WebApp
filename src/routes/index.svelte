<script>
	import Firebaselogin from '../lib/firebase/firebaselogin.svelte';
	import axios from 'axios';
	// fetch(url)
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));

	let url = '../lib/api/sticker.json';

	axios.get(url).then((res) => console.log(res.data));
</script>

<Firebaselogin />
