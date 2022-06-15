<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaImages from 'svelte-icons/fa/FaImages.svelte';
	import FaRegGrimace from 'svelte-icons/fa/FaRegGrimace.svelte';
	import IoMdText from 'svelte-icons/io/IoMdText.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import { toggleSidebarFunc } from '../../utils/toggleComponent';
	import FaCloudMoon from 'svelte-icons/fa/FaCloudMoon.svelte';

	// let files;
	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

	//upload a new theme template from the local device
	let files = [];
	$: file = files[0];

	//dark and Light Mode toggle button
	function toggle() {
		window.document.body.classList.toggle('dark');
	}

	function toggleTemplateDropDown() {
		var TemplateDropDownBtn = document.getElementById('templateDropDownBtn');
		var dropDownDiv = document.getElementById('dropdown-example');
		TemplateDropDownBtn.addEventListener('click', () => {
			if (dropDownDiv.style.display == 'hidden') {
				console.log('function triggred');
				dropDownDiv.style.display == 'block';
			} else {
				dropDownDiv.style.display == 'hidden';
			}
		});
	}
</script>

<div
	class="bg-red-700 rounded   dark:bg-customColorGray h-screen  text-center relative min-h-screen  flex  sidebar"
>
	<!-- toggle Sidebar code -->

	<ul class="space-y-0    w-full mt-4	 ">
		<div class="flex flex-col justify-around items-center">
			<button class=" text-white dark:text-blue-200 w-8 h-16" on:click={toggle}>
				<FaCloudMoon /></button
			>

			<div class="form-control">
				<label class="label cursor-pointer">
					<input
						type="checkbox"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
						class="toggle toggle-primary"
						checked
					/>
				</label>
			</div>
		</div>

		<div id="sidebarToggleDiv">
			<li
				class="w-full py-4 hover:shadow-xl text-white  hover:bg-white hover:text-red-700  dark:hover:text-customColorGray   "
			>
				<a
					href="/dashboard"
					class="w-full   flex items-center  p-2 text-base font-normal rounded-lg  "
				>
					<div class="flex items-center align-middle ">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome /></span>
						<span class="whitespace-nowrap mt-3 ml-4 center flex  "> Dashboard</span>
					</div>
				</a>
			</li>
			<li
				class=" w-full py-4 hover:shadow-xl text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<button
					id="templateDropDownBtn"
					on:click={toggleTemplateDropDown}
					type="button"
					class=" flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group   "
					data-collapse-toggle="dropdown-example"
					aria-expanded="false"
				>
					<div class="flex items-center align-middle ">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaImages /></span>
						<span class="whitespace-nowrap mt-3 ml-4 center flex "> Templates</span>

						<!-- <svg class="animate-bounce w-6 h-6 flex mt-4 ml-2 "> -->
						<svg class=" w-6 h-6 flex mt-4 ml-2 ">
							<FaAngleDown />
						</svg>
					</div>
				</button>

				<ul id="dropdown-example" class="hidden py-2 space-y-2">
					<li>
						<a
							href="/trendingtemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group hover:bg-white hover:text-red-700 "
							>Trending E-cards</a
						>
					</li>
					<li>
						<a
							href="/mostdownloadedtemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group "
							>Most Downloaded
						</a>
					</li>
					<li>
						<a
							href="/communitytemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group "
							>Community E-cards</a
						>
					</li>
				</ul>
			</li>

			<li
				class="w-full py-4 hover:shadow-xl  text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a href="/stickerTable" class=" flex items-center p-2 text-base font-normal  rounded-lg  ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex"
						>
							Stickers</span
						>
					</div>
				</a>
			</li>
			<li
				class="w-full py-4 hover:shadow-xl  text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a href="/messageTable" class=" flex items-center p-2 text-base font-normal  rounded-lg  ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText /></span><span
							class="whitespace-nowrap mt-3 ml-4 center flex "
						>
							Messages</span
						>
					</div>
				</a>
			</li>

			<li
				class="w-full py-4 hover:shadow-xl text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a href="/category" class=" flex items-center p-2 text-base font-normal  rounded-lg  ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex">Categories</span
						>
					</div>
				</a>
			</li>
		</div>

		<!-- sidebar icon div -->

		<div id="iconsSidebarToggle" class="hidden">
			<li class="w-full py-4 hover:shadow-xl   ">
				<a
					href="/dashboard"
					class="w-full   flex items-center  p-2 text-base font-normal rounded-lg  text-white dark:text-white "
				>
					<div class="flex items-center align-middle ">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome /></span>
					</div>
				</a>
			</li>
			<li class="w-full py-4 hover:shadow-xl  ">
				<button
					type="button"
					class=" flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group   "
					data-collapse-toggle="dropdown-example"
					aria-expanded="false"
				>
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  mr-4 text-white dark:text-white">
							<FaImages /></span
						>

						<svg class=" w-6 h-6 flex mt-4 ml-2 text-white dark:text-white">
							<FaAngleDown />
						</svg>
					</div>
				</button>

				<ul id="dropdown-example" class="hidden py-2 space-y-2">
					<li>
						<a
							href="/trendingtemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group hover:bg-blue-300 dark:  "
							>Trending E-cards</a
						>
					</li>
					<li>
						<a
							href="/mostdownloadedtemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group hover:bg-blue-300 dark:  "
							>Most Downloaded
						</a>
					</li>
					<li>
						<a
							href="/communitytemplates"
							class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group hover:bg-blue-300 dark:  "
							>Community E-cards</a
						>
					</li>
				</ul>
			</li>

			<li class="w-full py-4 hover:shadow-xl  ">
				<a href="/stickers" class=" flex items-center p-2 text-base font-normal  rounded-lg dark: ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex text-white dark:text-white ">
							<FaRegGrimace /></span
						>
					</div>
				</a>
			</li>
			<li class="w-full py-4 hover:shadow-xl  ">
				<a href="/messages" class=" flex items-center p-2 text-base font-normal  rounded-lg dark: ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  text-white dark:text-white"> <IoMdText /></span>
					</div>
				</a>
			</li>

			<li class="w-full py-4 hover:shadow-xl  ">
				<a href="/category" class=" flex items-center p-2 text-base font-normal  rounded-lg dark: ">
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex text-white dark:text-white "> <FaSearch /></span>
					</div>
				</a>
			</li>
		</div>
	</ul>
</div>
