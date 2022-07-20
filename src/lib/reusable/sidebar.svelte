<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaImages from 'svelte-icons/fa/FaImages.svelte';
	import IoMdText from 'svelte-icons/io/IoMdText.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import { toggleSidebarFunc } from '../../utils/toggleComponent';
	import FaSmileWink from 'svelte-icons/fa/FaSmileWink.svelte';
	import GiHamburgerMenu from 'svelte-icons/gi/GiHamburgerMenu.svelte';

	// let files;
	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

	//upload a new theme template from the local device
	let files = [];
	$: file = files[0];
</script>

<div
	class="bg-red-700 text-white  flex  dark:bg-customColorGray  text-center relative h-screen 2xl:h-screen   sidebar"
>
	<!-- toggle Sidebar code -->

	<ul class="   w-full mt-4	 justify-center items-center">
		<!-- //////////////////////////////////////////////////////// -->
		<div id="sidebarToggleDiv">
			<div class="flex flex-row   justify-around items-center  ml-4 " id="toggleDarkBtn">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						class="label cursor-pointer w-8 2xl:w-16 2xl:mt-8 2xl:mb-4"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
					>
						<GiHamburgerMenu />
					</label>
				</div>
			</div>
			<li
				class="w-full py-4  text-white  hover:bg-white hover:text-red-700  dark:hover:text-customColorGray  2xl:mb-4 "
			>
				<a
					href="/dashboard"
					class="w-full   flex items-center  p-2 text-base font-normal	 rounded-lg  "
				>
					<div class="flex items-center align-middle ">
						<span class="mt-3 ml-3 w-6 h-6 flex   2xl:w-14 2xl:h-12 "> <FaHome /></span>
						<span class="whitespace-nowrap mt-3 ml-4 center flex  2xl:text-3xl "> Dashboard</span>
					</div>
				</a>
			</li>

			<!-- ///////////////////////////////////////////////////////////////////// -->
			<td>
				<div class="collapse  py-2 ">
					<input type="checkbox" class="peer" />
					<li
						class="collapse-title truncate flex hover:bg-white hover:text-red-700   dark:hover:text-customColorGray  "
					>
						<div class="flex items-center align-middle hover:bg-white hover:text-red-700">
							<span
								class="mt-3 ml-2 w-6 h-6 flex hover:bg-white hover:text-red-700  2xl:w-14 2xl:h-12 "
							>
								<FaImages /></span
							>
							<span
								class="whitespace-nowrap mt-3 ml-4  center flex hover:bg-white hover:text-red-700 2xl:text-3xl"
							>
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
											class="2xl:text-3xl hover:bg-white 2xl:my-6 hover:text-red-700 truncate flex items-center w-full p-2 text-sm   transition duration-75 rounded-lg  "
											>Trending E-cards</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class="2xl:text-3xl truncate flex items-center text-sm hover:bg-white hover:text-red-700 w-full p-2 transition duration-75 rounded-lg group  "
											>Most Downloaded
										</a>
									</li>
									<li>
										<a
											href="/allTemplatesTableRoute"
											class="2xl:text-3xl flex items-center 2xl:my-6 w-full hover:bg-white hover:text-red-700 p-2 text-sm transition duration-75 rounded-lg group  "
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
				class="w-full py-4   text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray 2xl:my-4"
			>
				<a
					href="/stickerTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  2xl:w-14 2xl:h-12"> <FaSmileWink /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex  2xl:text-3xl"
						>
							Stickers</span
						>
					</div>
				</a>
			</li>
			<li
				class="w-full py-4   text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray 2xl:mb-4"
			>
				<a
					href="/messageTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center align-middle">
						<span class="mt-3 ml-3 w-6 h-6 flex  2xl:w-14 2xl:h-12"> <IoMdText /></span><span
							class="whitespace-nowrap mt-3 ml-4 center flex 2xl:text-3xl"
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
						<span class="mt-3 ml-3 w-6 h-6 flex 2xl:w-14 2xl:h-12 "> <FaSearch /></span><span
							class=" whitespace-nowrap mt-3 ml-4 center flex 2xl:text-3xl">Categories</span
						>
					</div>
				</a>
			</li>
		</div>

		<!-- sidebar icon div -->

		<div id="iconsSidebarToggle" class="  hidden justify-center w-12 2xl:w-24">
			<!-- toggle Sidebar code -->
			<div class="flex flex-col   justify-center items-center   " id="toggleDarkBtn">
				<div>
					<!-- <button class=" text-white dark:text-blue-200 w-8 h-16" on:click={toggle}> -->
					<!-- <FaCloudMoon /> -->
					<!-- </button> -->
				</div>

				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						class="label cursor-pointer w-8 2xl:w-14"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
					>
						<GiHamburgerMenu />
					</label>
				</div>
			</div>

			<ul class="   justify-center items-center w-full mt-2 	flex flex-col ">
				<li
					class="w-full py-4   text-white hover:bg-white hover:text-red-700 dark:hover:text-customColorGray  2xl:mt-4 "
				>
					<a
						href="/dashboard"
						class="w-full   flex items-center justify-center  p-2 text-base font-normal rounded-lg  "
					>
						<div class="flex items-center align-middle ">
							<span class="mt-3 w-6 h-6 flex 2xl:w-16 2xl:h-12 "> <FaHome /></span>
						</div>
					</a>
				</li>

				<div class="collapse  py-2  ">
					<input type="checkbox" class="peer" />
					<li class="collapse-title truncate  text-white  	   dark:hover:text-customColorGray 2xl:mt-4 ">
						<span class="w-6 ml-1 flex  2xl:w-16 2xl:h-12 "> <FaImages /></span>
					</li>
					<div class="collapse-content ">
						<div class="  justify-center relative   " id="toggleContent">
							<li class=" w-full py-2  text-white   dark:hover:text-customColorGray ">
								<ul id="dropdown-example" class=" py-2 space-y-2">
									<li>
										<a
											href="/allTemplatesTableRoute"
											class=" flex items-center w-full justify-center hover:bg-white hover:text-red-700 p-2 text-base font-normal  transition duration-75 rounded-lg group "
											>A</a
										>
									</li>
									<li>
										<a
											href="/trendingTemplatesTableRoute"
											class="hover:bg-white justify-center hover:text-red-700 truncate flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group "
											>T</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class=" truncate flex items-center justify-center hover:bg-white hover:text-red-700 w-full p-2 text-base font-normal transition duration-75 rounded-lg group   "
											>M
										</a>
									</li>
								</ul>
							</li>
						</div>
					</div>
				</div>

				<li
					class="w-full py-4  text-white  hover:bg-red-700 hover:text-white dark:hover:text-customColorGray 2xl:mt-4"
				>
					<a
						href="/stickerTableRoute"
						class=" flex items-center p-2 text-base font-normal justify-center rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3  w-6 h-6 flex 2xl:w-16 2xl:h-12">
								<FaSmileWink />
							</span>
						</div>
					</a>
				</li>
				<li
					class="w-full py-4  text-white  hover:bg-red-700 hover:text-white dark:hover:text-customColorGray 2xl:mt-4"
				>
					<a
						href="/messageTableRoute"
						class=" flex items-center p-2 text-base font-normal justify-center  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3  w-6 h-6 flex  2xl:w-16 2xl:h-12"> <IoMdText /></span>
						</div>
					</a>
				</li>

				<li
					class="w-full py-4  text-white  hover:bg-red-700 hover:text-white dark:hover:text-customColorGray 2xl:mt-4"
				>
					<a
						href="/categoryTableRoute"
						class=" flex items-center p-2 text-base font-normal justify-center rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="mt-3  w-6 h-6 flex  2xl:w-16 2xl:h-12"> <FaSearch /></span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</ul>
</div>
