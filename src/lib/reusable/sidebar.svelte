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
	class="bg-gray-50 text-black dark:text-white flex  dark:bg-customColorGray   text-center relative h-screen 2xl:h-screen    sidebar"
>
	<!-- toggle Sidebar code -->

	<ul class="   w-full mt-4	 justify-start items-center">
		<!-- //////////////////////////////////////////////////////// -->
		<div id="sidebarToggleDiv">
			<div class="flex flex-row   justify-start items-center  ml-4 " id="toggleDarkBtn">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						class="label cursor-pointer w-6 2xl:w-16 2xl:mt-8 2xl:mb-4 focus:text-gray-200 active:text-gray-400"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
					>
						<GiHamburgerMenu />
					</label>
				</div>
			</div>
			<li
				class="w-full  py-3 dark:text-white text-black  hover:bg-red-700  hover:text-black dark:hover:bg-white dark:hover:text-black    2xl:mb-4 "
			>
				<a
					href="/dashboard"
					class="w-full   flex items-center  p-2 text-base font-normal	 rounded-lg  "
				>
					<div class="flex items-center align-middle ">
						<span class=" ml-3 w-5 flex   2xl:w-14 2xl:h-12 ">
							<img src="houseIcon.png" alt="" class="color-white" />
						</span>
						<span class="whitespace-nowrap ml-4 center flex  2xl:text-3xl "> Dashboard</span>
					</div>
				</a>
			</li>

			<!-- ///////////////////////////////////////////////////////////////////// -->
			<td>
				<div class="collapse    ">
					<input type="checkbox" class="peer" />
					<li class="collapse-title truncate flex hover:bg-red-700 hover:text-black  dark:hover:bg-white dark:hover:text-black     ">
						<div class="flex items-center align-middle ">
							<span class=" ml-1 w-5 h-5 flex  2xl:w-14 2xl:h-12 ">
								<img src="imageIcon.png" alt="" />
							</span>
							<span class="whitespace-nowrap  ml-4 dark:text-white  center flex  2xl:text-3xl">
								Templates</span
							>
						</div>
					</li>
					<div class="collapse-content  ">
						<div class="  justify-center relative   " id="toggleContent">
							<li class=" w-full  text-black     ">
								<ul id="dropdown-example" class="  space-y-2">
									<li>
										<a
											href="/trendingTemplatesTableRoute"
											class="2xl:text-3xl hover:text-black dark:text-white dark:hover:bg-white dark:hover:text-black   hover:bg-red-700 2xl:my-6 truncate flex items-center w-full p-2 text-sm   transition duration-75 rounded-lg  "
											>Trending E-cards</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class="2xl:text-3xl truncate flex dark:hover:bg-white dark:hover:text-black   dark:text-white items-center text-sm hover:text-black  hover:bg-red-700 w-full p-2 transition duration-75 rounded-lg group  "
											>Most Downloaded
										</a>
									</li>
									<li>
										<a
											href="/allTemplatesTableRoute"
											class="2xl:text-3xl flex items-center dark:hover:bg-white dark:hover:text-black   dark:text-white 2xl:my-6 w-full hover:text-black  hover:bg-red-700 p-2 text-sm transition duration-75 rounded-lg group  "
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
				class="w-full  py-3  dark:text-white text-black hover:bg-red-700 dark:hover:bg-white dark:hover:text-black   hover:text-black 2xl:my-4"
			>
				<a
					href="/stickerTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center">
						<span class=" ml-3 w-5 h-5 flex  2xl:w-14 2xl:h-12">
							<img src="stickerIcon.png" alt="" /></span
						><span class=" whitespace-nowrap  ml-4 center flex  2xl:text-3xl"> Stickers</span>
					</div>
				</a>
			</li>
			<li
				class="w-full  py-3 dark:text-white  items-center  text-black hover:bg-red-700 dark:hover:bg-white dark:hover:text-black   hover:text-black  2xl:mb-4"
			>
				<a
					href="/messageTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex  items-center">
						<span class=" ml-3 w-5 h-5 flex  2xl:w-14 2xl:h-12 mt-1">
							<img src="messageIcon.png" alt="" /></span
						><span class="whitespace-nowrap  ml-4 center flex 2xl:text-3xl dark:hover:bg-white dark:hover:text-black  "> Messages</span>
					</div>
				</a>
			</li>

			<li class="w-full   py-3 dark:text-white text-black hover:bg-red-700 hover:text-black dark:hover:bg-white dark:hover:text-black  ">
				<a
					href="/categoryTableRoute"
					class=" flex items-center p-2 text-base font-normal  rounded-lg  "
				>
					<div class="flex items-center align-middle">
						<span class=" ml-3 w-5 h-5 flex 2xl:w-14 2xl:h-12 mt-1">
							<img src="searchIcon.png" alt="" /></span
						><span class=" whitespace-nowrap  ml-4 center flex 2xl:text-3xl   ">Categories</span>
					</div>
				</a>
			</li>
		</div>

		<!-- sidebar icon div -->

		<div id="iconsSidebarToggle" class="  hidden justify-center w-12 2xl:w-24">
			<!-- toggle Sidebar code -->
			<div class="flex flex-col   justify-center items-center   " id="toggleDarkBtn">
				<div>
					<!-- <button class=" text-black dark:text-blue-200 w-8 h-16" on:click={toggle}> -->
					<!-- <FaCloudMoon /> -->
					<!-- </button> -->
				</div>

				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						class="label cursor-pointer w-5 2xl:w-14 focus:text-gray-200 active:text-gray-400"
						id="toggleSidebarBtn"
						on:click={toggleSidebarFunc}
					>
						<GiHamburgerMenu />
					</label>
				</div>
			</div>

			<ul class="   justify-center items-center w-full  	flex flex-col ">
				<li
					class="w-full    text-black hover:bg-red-700 hover:text-white   dark:hover:bg-white dark:hover:text-black   2xl:mt-4 "
				>
					<a
						href="/dashboard"
						class="w-full   flex items-center justify-center  p-2 text-base font-normal rounded-lg  "
					>
						<div class="flex items-center align-middle ">
							<span class=" w-5 h-5 flex 2xl:w-16 2xl:h-12">
								<img src="houseIcon.png" alt="" /></span
							>
						</div>
					</a>
				</li>

				<div class="collapse">
					<input type="checkbox" class="peer" />
					<li class="collapse-title truncate   text-black  hover:bg-red-700 	    2xl:mt-4 ">
						<span class="w-5 ml-2 flex  2xl:w-16 2xl:h-12 ">
							<img src="imageIcon.png" alt="" /></span
						>
					</li>
					<div class="collapse-content p-0 m-0">
						<div class="  justify-center relative   " id="toggleContent">
							<li class=" w-full   text-black    ">
								<ul id="dropdown-example" class="  ">
									<li>
										<a
											href="/allTemplatesTableRoute"
											class=" flex items-center  justify-center dark:hover:bg-white dark:hover:text-black   hover:bg-red-700   hover:text-black p-2 text-base font-normal  transition duration-75 rounded-lg group "
											>A</a
										>
									</li>
									<li>
										<a
											href="/trendingTemplatesTableRoute"
											class="hover:bg-red-700 justify-center  dark:hover:bg-white dark:hover:text-black   hover:text-black truncate flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg group "
											>T</a
										>
									</li>
									<li>
										<a
											href="/downloadTemplatesTableRoute"
											class=" truncate flex items-center  justify-center dark:hover:bg-white dark:hover:text-black   hover:bg-red-700 hover:text-black w-full p-2 text-base font-normal transition duration-75 rounded-lg group   "
											>M
										</a>
									</li>
								</ul>
							</li>
						</div>
					</div>
				</div>

				<li
					class="w-full py-2  mb-3 hover:bg-red-700   hover:text-black dark:hover:bg-white dark:hover:text-black   2xl:mt-4"
				>
					<a
						href="/stickerTableRoute"
						class=" flex items-center  text-base font-normal justify-center  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="  w-5 h-5 flex 2xl:w-16 2xl:h-12">
								<img src="stickerIcon.png" alt="" />
							</span>
						</div>
					</a>
				</li>
				<li
					class="w-full  hover:bg-red-700   hover:text-black mb-3  text-black  dark:hover:bg-white dark:hover:text-black    2xl:mt-4 "
				>
					<a
						href="/messageTableRoute"
						class=" flex items-center p-2 text-base font-normal justify-center  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="  w-5 h-5 flex  2xl:w-16 2xl:h-12">
								<img src="messageIcon.png" alt="" /></span
							>
						</div>
					</a>
				</li>

				<li
					class="w-full   text-black  hover:bg-red-700   hover:text-black dark:hover:bg-white dark:hover:text-black   2xl:mt-4 "
				>
					<a
						href="/categoryTableRoute"
						class=" flex items-center p-2 text-base font-normal justify-center  rounded-lg dark: "
					>
						<div class="flex items-center align-middle">
							<span class="  w-5 h-5 flex  2xl:w-16 2xl:h-12">
								<img src="searchIcon.png" alt="" /></span
							>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</ul>
</div>
