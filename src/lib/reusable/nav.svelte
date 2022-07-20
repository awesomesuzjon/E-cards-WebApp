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
	import FaCloudMoon from 'svelte-icons/fa/FaCloudMoon.svelte';
	// import DarkBtn from '../reusable/darkBtn.svelte';
	//dark and Light Mode toggle button
	function toggle() {
		window.document.body.classList.toggle('dark');
	}
</script>

<!-- <DarkBtn />
 -->
<div
	class="bg-red-700  dark:bg-customColorGray    text-white justify-between	 flex   h-16 2xl:h-32  items-center "
>
	<a href="/">
		<div class="flex flex-row   items-center text-lg font-bold text-bold">
			<img src="logo.png" alt="HamroPatro Logo" class="w-12 2xl:w-20 mt-2 ml-6 " />
			<h1 class="text-white text-lg ml-4 2xl:text-3xl ">Hamro E-cards</h1>
		</div>
	</a>
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
						<p class="dark:text-white 2xl:text-2xl">Home{$page.url.pathname}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- /////////////////////// -->

	<div class="flex flex-row items-center ">
	
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div class="dropdown dropdown-left mr-8">
			<label tabindex="0" class=" m-1">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src="admin.png" class="w-8  2xl:w-16 2xl:mr-8   rounded-full " alt="Admin Image" />
			</label>

			<ul
				tabindex="0"
				class="dropdown-content mt-16 menu p-2 text-black shadow bg-base-100 rounded-box w-52 2xl:60 2xl:mt-20  2xl:h-48 dark:bg-gray-400 "
			>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h1 class="w-12 ml-1"><IoIosPerson /></h1>

					<a href="#" class="block px-4 py-2 "> Profile</a>
				</li>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h2 class="w-12  ml-1 "><IoIosSettings /></h2>
					<a href="#" class="block px-4 py-2 "> Setting</a>
				</li>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h2 class="w-12 ml-1 "><IoIosLogOut /></h2>
					<a href="/" class="block px-4 py-2 "> Log out</a>
				</li>
			</ul>
		</div>
		<div>
			<button
				class=" text-white dark:text-blue-200 w-6 mr-12 h-16 2xl:w-16 2xl:h-20 2xl:mr-16"
				on:click={toggle}
			>
				<FaCloudMoon />
			</button>
		</div>
	</div>
</div>
