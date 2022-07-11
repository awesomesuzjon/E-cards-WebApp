<script>
	import Firebaselogin from '../lib/firebase/firebaselogin.svelte';
	import { onMount } from 'svelte';
	let url = 'http://192.168.86.55:8090/get/catagory';
	export var categoryArr = [];
	onMount(() => {
		fetch(url).then((res) => {
			res.json().then((data) => {
				categoryArr = data?.categories ?? [];
			});
		});
	});
</script>

{#each categoryArr as item}
	<h1>Title is {item.name}</h1>
	<h1>Title is {item.id}</h1>
	<h1>Title is {item.priority}</h1>
	<h1>Title is {item.isTrending}</h1>
{/each}
<Firebaselogin />
