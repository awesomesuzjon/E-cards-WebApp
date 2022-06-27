<script>
	import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte/internal';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import IoIosNotifications from 'svelte-icons/io/IoIosNotifications.svelte';
	import IoMdMailUnread from 'svelte-icons/io/IoMdMailUnread.svelte';
	import IoIosPerson from 'svelte-icons/io/IoIosPerson.svelte';
	import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
	import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte';
	import IoIosLogOut from 'svelte-icons/io/IoIosLogOut.svelte';
	import { page } from '$app/stores';
</script>

<div
	class="bg-red-700  dark:bg-customColorGray    text-white justify-between	 flex   h-16  items-center "
>
	<div>
		<a href="/"><img src="logo.png" alt="HamroPatro Logo" class="w-16 mt-6 ml-3 " /></a>
	</div>

	<div class="flex justify-start text-sm ">
		<div class="text-sm breadcrumbs">
			<ul>
				<li>
					<a href="dashboard">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-4 h-4 mr-2 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							/></svg
						>
						<p class="dark:text-white">Home{$page.url.pathname}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="flex-row flex items-center justify-end p-2">
		<button id="dropdownDefault" data-dropdown-toggle="dropdown" type="button">
			<img src="admin.png" class="w-8 ml-1   rounded-full " alt="Admin Image" />
		</button>
		<!-- Dropdown menu -->
		<div
			id="dropdown"
			class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
		>
			<ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
				<li class="flex flex-row items-center ">
					<h2 class="w-5   ml-1"><IoIosPerson /></h2>
					<a
						href="#"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						Profile</a
					>
				</li>
				<li class="flex flex-row items-center ">
					<h2 class="w-5  ml-1 "><IoIosSettings /></h2>
					<a
						href="#"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						Setting</a
					>
				</li>
				<li class="flex flex-row items-center ">
					<h2 class="w-5 ml-1 "><IoIosLogOut /></h2>
					<a
						href="#"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						Log out</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
