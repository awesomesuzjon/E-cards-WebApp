<script lang="ts">
	import '../app.css';
	import { initializeApp } from 'firebase/app';
	import Nav from '../lib/reusable/nav.svelte';
	import Sidebar from '../lib/reusable/sidebar.svelte';
	import { onMount } from 'svelte';
	import { firebaseConfig } from '../utils/firebaseConfig';
	import BreadCrumb from '../lib/reusable/breadCrumb.svelte';
	const firebaseApp = initializeApp(firebaseConfig);
</script>

<Nav />
<div class="relative h-screen 2xl:h-screen	flex overflow-hidden ">
	<Sidebar />

	<div
		class="w-full  text-center text-bold text-sm dark:bg-gray-700 bg-gray-100 overflow-y-hidden"
		id="main-container"
	>
		<BreadCrumb />
		<slot />
	</div>
	<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
</div>

<style>
	@font-face {
		font-family: 'gilroy';
		font-style: normal bold extrabold light medium regular;
		font-weight: 400;
		src: local('gilroy-bold'), local('gilroy-extrabold'), local('gilroy-light'),
			local('gilroy-medium'), local('gilroy-regular') url('static/fonts/gilroy') format('otf');
	}

	* {
		font-family: 'gilroy';
	}
</style>
