<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaImages from 'svelte-icons/fa/FaImages.svelte';
	import IoMdText from 'svelte-icons/io/IoMdText.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import { toggleSidebarFunc } from '../../utils/toggleComponent';
	import FaSmileWink from 'svelte-icons/fa/FaSmileWink.svelte';

	// let files;
	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

	//upload a new theme template from the local device
	let files = [];
	$: file = files[0];
</script>

<div class="bg-red-700  flex  dark:bg-customColorGray  text-center relative h-screen   sidebar">
	<!-- toggle Sidebar code -->

	<ul class="   w-full mt-4	 justify-center items-center">
		<!-- //////////////////////////////////////////////////////// -->
		<div id="sidebarToggleDiv">
			<div class="flex flex-row   justify-around items-center  ml-4 " id="toggleDarkBtn">
				<div class="form-control">
					<label class="label cursor-pointer ">
						<input
							type="checkbox"
							id="toggleSidebarBtn"
							on:click={toggleSidebarFunc}
							class="toggle bg-red-700 active:bg-gray-200  border-none "
							checked
						/>
					</label>
				</div>
			</div>
			<li
				class="w-full py-4  text-white  hover:bg-white hover:text-red-700  dark:hover:text-customColorGray   "
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

			<!-- ///////////////////////////////////////////////////////////////////// -->
			<td>
				<div class="collapse  py-2 ">
					<input type="checkbox" class="peer" />
					<li class="collapse-title truncate flex text-white   dark:hover:text-customColorGray  ">
						<div class="flex items-center align-middle ">
							<span class="mt-3 ml-2 w-6 h-6 flex  "> <FaImages /></span>
							<span class="whitespace-nowrap mt-3 ml-4 center flex  hover:text-red-700 ">
								Templates</span
							>
						</div>
					</li>
					<div class="collapse-content  ">
						<div class="  justify-center relative   " id="toggleContent">
							<li class=" w-full py-4 text-white    dark:hover:text-customColorGray ">
								<ul id="dropdown-example" class=" py-2 space-y-2">
									<li>
										<a
											href="/trendingTemplatesTableRoute"
											class=" hover:bg-white truncate flex items-center w-full p-2 text-sm   transition duration-75 rounded-lg  hover:text-red-700 "
											>Trending E-cards</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class=" truncate flex items-center text-sm hover:bg-white w-full p-2 transition duration-75 rounded-lg group hover:text-red-700 "
											>Most Downloaded
										</a>
									</li>
									<li>
										<a
											href="/allTemplatesTableRoute"
											class=" flex items-center w-full hover:bg-white p-2 text-sm transition duration-75 rounded-lg group hover:text-red-700 "
											>All E-cards</a
										>
									</li>
								</ul>
							</li>
						</div>
					</div>
				</div>
			</td>

			<!-- ///////////////////////////////////////////////////////////////////// -->

			<li
				class="w-full py-4   text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a
					href="/stickerTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSmileWink /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex"
						>
							Stickers</span
						>
					</div>
				</a>
			</li>
			<li
				class="w-full py-4   text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a
					href="/messageTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
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
				class="w-full py-4  text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
			>
				<a
					href="/categoryTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex">Categories</span
						>
					</div>
				</a>
			</li>
		</div>

		<!-- sidebar icon div -->
		<div id="iconsSidebarToggle" class="  hidden">
			<!-- toggle Sidebar code -->
			<div class="flex flex-col   justify-start items-start  ml-4 " id="toggleDarkBtn">
				<div>
					<!-- <button class=" text-white dark:text-blue-200 w-8 h-16" on:click={toggle}> -->
					<!-- <FaCloudMoon /> -->
					<!-- </button> -->
				</div>

				<div class="form-control">
					<label class="label cursor-pointer ">
						<input
							type="checkbox"
							id="toggleSidebarBtn"
							on:click={toggleSidebarFunc}
							class="toggle bg-white text-red-700 dark:text-black m-0 active:bg-gray-200  border-none "
							checked
						/>
					</label>
				</div>
			</div>

			<ul class="   w-full mt-2	flex flex-col  items-start">
				<li
					class="w-full py-4  text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray  "
				>
					<a
						href="/dashboard"
						class="w-full   flex items-center  p-2 text-base font-normal rounded-lg  "
					>
						<div class="flex items-center align-middle ">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome /></span>
						</div>
					</a>
				</li>

				<div class="collapse  py-2 ">
					<input type="checkbox" class="peer" />
					<li class="collapse-title truncate flex text-white   dark:hover:text-customColorGray  ">
						<div class="flex items-center align-middle ">
							<span class="mt-3 ml-2 w-6 h-6 flex  "> <FaImages /></span>
							<span class="whitespace-nowrap mt-3 ml-4 center flex  hover:text-red-700 " />
						</div>
					</li>
					<div class="collapse-content hover:bg-gray-300 ">
						<div class="  justify-center relative   " id="toggleContent">
							<li
								class=" w-full py-4  text-white   hover:text-red-700 dark:hover:text-customColorGray "
							>
								<ul id="dropdown-example" class=" py-2 space-y-2">
									<li>
										<a
											href="/allTemplatesTableRoute"
											class=" flex items-center w-full hover:bg-white p-2 text-base font-normal  transition duration-75 rounded-lg group "
											>A</a
										>
									</li>
									<li>
										<a
											href="/trendingTemplatesTableRoute"
											class=" hover:bg-white truncate flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group hover:text-red-700 "
											>T</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class=" truncate flex items-center hover:bg-white w-full p-2 text-base font-normal transition duration-75 rounded-lg group "
											>M
										</a>
									</li>
								</ul>
							</li>
						</div>
					</div>
				</div>

				<li
					class="w-full py-4  text-white  hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
				>
					<a
						href="/stickerTableRoute"
						class=" flex items-center p-2 text-base font-normal  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex ">
								<FaSmileWink />
							</span>
						</div>
					</a>
				</li>
				<li
					class="w-full py-4  text-white  hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
				>
					<a
						href="/messageTableRoute"
						class=" flex items-center p-2 text-base font-normal  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText /></span>
						</div>
					</a>
				</li>

				<li
					class="w-full py-4  text-white  hover:bg-white hover:text-red-700 dark:hover:text-customColorGray "
				>
					<a
						href="/categoryTableRoute"
						class=" flex items-center p-2 text-base font-normal  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch /></span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</ul>
</div>
