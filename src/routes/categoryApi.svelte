<script>
	import { onMount } from 'svelte';
	import { categoryDataStore } from '../stores/categoryData';
	import { each } from 'svelte/internal';
	let url = 'https://jsonplaceholder.typicode.com/todos/';
	// let url = 'http://192.168.86.55:8090/get/catagory';
	var categoryArr = [];

	onMount(async () => {
		const res = await fetch(url);
		const data = await res.json();
		categoryArr = data;
	});
</script>

{#each categoryArr as item}
	<h1>Title is {item.title}</h1>
{/each}
