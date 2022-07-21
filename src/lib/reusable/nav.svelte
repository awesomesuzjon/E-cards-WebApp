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
	import DarkBtn from '../reusable/darkBtn.svelte';
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
	class="bg-white  dark:bg-customColorGray    text-black justify-between	 flex   h-16 2xl:h-32  items-center "
>
	<a href="/dashboard">
		<div class="flex flex-row   items-center text-lg font-bold text-bold">
			<img src="logo.png" alt="HamroPatro Logo" class="w-12 2xl:w-20 mt-2 ml-6 " />
			<h1 class="text-black text-lg ml-4 2xl:text-3xl dark:text-white">HAMRO E-CARDS</h1>
		</div>
	</a>

	<!-- /////////////////////// -->

	<div class="flex flex-row items-center ">
		<div>
			<button
				class=" text-white dark:text-blue-200 w-6 mr-8 h-16 2xl:w-16 2xl:h-20 2xl:mr-16 "
				on:click={toggle}
			>
				<!-- <FaCloudMoon /> -->
				<DarkBtn />
			</button>
		</div>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div class="dropdown dropdown-left mr-1">
			<label tabindex="0" class=" m-1">
				<!-- svelte-ignore a11y-img-redundant-alt da-->
				<img
					src="admin.png"
					class="w-9  mr-4 2xl:w-16 2xl:mr-8   rounded-full "
					alt="Admin Image"
				/>
			</label>

			<ul
				tabindex="0"
				class="dropdown-content mt-16 menu p-2 text-white  shadow bg-gray-400 rounded-box w-52 2xl:60 2xl:mt-20  2xl:h-48 dark:bg-gray-400 "
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
	</div>
</div>
