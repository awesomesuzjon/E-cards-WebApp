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
</script>

<div
	class="bg-customColorPink rounded   dark:bg-gray-800 h-screen  text-center relative min-h-screen  flex  sidebar"
>
	<!-- toggle Sidebar code -->

	<ul class="space-y-0    w-full mt-4		 ">
		<button
			class=" dark:btn-black-100  justify-right dark:text-gray-100 w-8 h-16"
			on:click={toggle}
		>
			<FaCloudMoon /></button
		>

		<ul class="space-y-0   	 w-full  ">
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text  text-black p-2 dark:text-gray-300">Show Sidebar</span>
					<input
						type="checkbox"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
						class="toggle toggle-primary"
						checked
					/>
				</label>
			</div>
			<div id="sidebarToggleDiv">
				<li class="w-full py-4 hover:shadow-xl  hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/dashboard"
						class="w-full   flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome /></span>
							<span class="whitespace-nowrap mt-3 ml-4 center flex dark:text-gray-300">
								Dashboard</span
							>
						</div>
					</a>
				</li>
				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<button
						type="button"
						class=" flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white "
						data-collapse-toggle="dropdown-example"
						aria-expanded="false"
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaImages /></span>
							<span class="whitespace-nowrap mt-3 ml-4 center flex dark:text-gray-300">
								Templates</span
							>

							<svg class="animate-bounce w-6 h-6 flex mt-4 ml-2 ">
								<FaAngleDown />
							</svg>
						</div>
					</button>

					<ul id="dropdown-example" class="hidden py-2 space-y-2">
						<li>
							<a
								href="/trendingtemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Trending E-cards</a
							>
						</li>
						<li>
							<a
								href="/mostdownloadedtemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Most Downloaded
							</a>
						</li>
						<li>
							<a
								href="/communitytemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Community E-cards</a
							>
						</li>
					</ul>
				</li>

				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/stickerTable"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace /></span><span
								class="dark:text-gray-300 whitespace-nowrap mt-3 ml-4 center flex"
							>
								Stickers</span
							>
						</div>
					</a>
				</li>
				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/messageTable"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText /></span><span
								class="whitespace-nowrap mt-3 ml-4 center flex dark:text-gray-300"
							>
								Messages</span
							>
						</div>
					</a>
				</li>

				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/category"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch /></span><span
								class="dark:text-gray-300 whitespace-nowrap mt-3 ml-4 center flex">Categories</span
							>
						</div>
					</a>
				</li>
			</div>

			<div id="iconsSidebarToggle" class="hidden">
				<li class="w-full py-4 hover:shadow-xl  hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/dashboard"
						class="w-full   flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle ">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome /></span>
						</div>
					</a>
				</li>
				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<button
						type="button"
						class=" flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white "
						data-collapse-toggle="dropdown-example"
						aria-expanded="false"
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  mr-4"> <FaImages /></span>

							<svg class="animate-bounce w-6 h-6 flex mt-4 ml-2 ">
								<FaAngleDown />
							</svg>
						</div>
					</button>

					<ul id="dropdown-example" class="hidden py-2 space-y-2">
						<li>
							<a
								href="/trendingtemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Trending E-cards</a
							>
						</li>
						<li>
							<a
								href="/mostdownloadedtemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Most Downloaded
							</a>
						</li>
						<li>
							<a
								href="/communitytemplates"
								class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-300 dark:text-white dark:hover:bg-gray-700 "
								>Community E-cards</a
							>
						</li>
					</ul>
				</li>

				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/stickers"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace /></span>
						</div>
					</a>
				</li>
				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/messages"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText /></span>
						</div>
					</a>
				</li>

				<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
					<a
						href="/category"
						class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch /></span>
						</div>
					</a>
				</li>
			</div>
		</ul>
	</ul>
</div>
