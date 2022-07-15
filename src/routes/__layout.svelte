<script lang="ts">
	import '../app.css';
	import { initializeApp } from 'firebase/app';
	import Nav from '../lib/reusable/nav.svelte';
	import Sidebar from '../lib/reusable/sidebar.svelte';
	import { onMount } from 'svelte';
	import { firebaseConfig } from '../utils/firebaseConfig';
	const firebaseApp = initializeApp(firebaseConfig);

	
</script>

<Nav />
<div class="relative h-screen flex overflow-y-hidden " >
	<Sidebar />

	<div class="w-full  text-center text-bold text-sm overflow-hidden dark:bg-gray-700" id="main-container">
		<slot />
	</div>
	<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
</div>

<style>

</style>
