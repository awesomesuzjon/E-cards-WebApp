<script>
	import IoIosPerson from 'svelte-icons/io/IoIosPerson.svelte';
	import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte';
	import IoIosLogOut from 'svelte-icons/io/IoIosLogOut.svelte';
	import DarkBtn from '../reusable/darkBtn.svelte';
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
			<h1 class="text-black text-xl ml-4 2xl:text-3xl dark:text-white " id="logoHeading">
				E-CARDS APP
			</h1>
		</div>
	</a>

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
			<label class=" m-1" tabindex="0">
				<!-- svelte-ignore a11y-img-redundant-alt da-->

			</label>

			<ul
				class="dropdown-content mt-16 menu p-2 text-white  shadow bg-gray-400 rounded-box w-52 2xl:60 2xl:mt-20  2xl:h-48 dark:bg-gray-400 "
				tabindex="0"
			>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h1 class="w-12 ml-1">
						<IoIosPerson />
					</h1>

					<a class="block px-4 py-2 " href="#"> Profile</a>
				</li>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h2 class="w-12  ml-1 ">
						<IoIosSettings />
					</h2>
					<a class="block px-4 py-2 " href="#"> Setting</a>
				</li>
				<li
					class="flex flex-row items-center  dark:hover:bg-gray-100 dark:hover:text-red-600 hover:bg-gray-600 hover:text-white"
				>
					<h2 class="w-12 ml-1 ">
						<IoIosLogOut />
					</h2>
					<a class="block px-4 py-2 " href="/"> Log out</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
    #logoHeading {
        font-family: 'gilroy';
        font-weight: bold;
    }
</style>
