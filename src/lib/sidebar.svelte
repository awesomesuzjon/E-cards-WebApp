<script>
  import FaHome from 'svelte-icons/fa/FaHome.svelte'
  import FaImages from 'svelte-icons/fa/FaImages.svelte'
  import FaRegGrimace from 'svelte-icons/fa/FaRegGrimace.svelte'
  import IoMdText from 'svelte-icons/io/IoMdText.svelte'
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
import {toggleSidebarFunc} from './toggleComponent.svelte'
import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';





	// let files;
	let firstName = [];
	$: fullName = `${firstName}`; 

//upload a new theme template from the local device
	let files = []
  $: file = files[0]
  

</script>

<div class="sidebarParentDiv bg-gradient-to-r from-cyan-500 to-blue-500   rounded dark:bg-gray-800 h-screen    pt-10 pb-10   text-center relative min-h-screen  flex  sidebarxx">
	
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-30 absolute top-0 left-0"><path fill="#0099ff" fill-opacity="1" d="M0,0L120,10.7C240,21,480,43,720,90.7C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> -->

<!-- toggle Sidebar code -->
<div class="drawer-content z-50 ">
	<label for="my-drawer" class=" absolute top-0 right-0  btn p-0 w-8 h-0 drawer-button  items-center justify-left flex   hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white">

		
		<!-- <span class="w-4 h-4"><FaAlignJustify/></span> -->
	 <h6 class="text-sm w-6 h-auto p-1"> <FaAngleRight/></h6>
	</label>
  </div>	

	<ul class="space-y-0 divide-y border-3 border w-full mt-4		 ">

		<div class="form-control">
			<label class="label cursor-pointer">
			  <span class="label-text text-white ">Show Sidebar</span>
			  <input type="checkbox" id="toggleSidebarBtn" on:click={toggleSidebarFunc}  class="toggle toggle-primary" checked>
			</label>
		  </div>
		  <div id="sidebarToggleDiv">
		<li class="w-full py-4 hover:shadow-xl  hover:bg-blue-100 dark:hover:bg-gray-700">
			<a
				href="/dashboard"
				class="w-full   flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome/></span>
					<span class="whitespace-nowrap mt-3 ml-4 center flex">  Dashboard</span>
				</div>
				</a>
		</li>
		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<button 
				type="button"
				class=" flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white "
				data-collapse-toggle="dropdown-example" aria-expanded="false"
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaImages/></span>
				<span class="whitespace-nowrap mt-3 ml-4 center flex">  Templates</span>
				
				<svg class="animate-bounce w-6 h-6 flex mt-4 ml-2 ">
					<FaAngleDown/>
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
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Stickers</span>
				</div>
			</a>
		</li>
		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<a
				href="/messages"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Messages</span>
			</div>
			</a>
		</li>

		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<a
				href="/category"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">Categories</span>
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
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome/></span>
				</div>
				</a>
		</li>
		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<button 
				type="button"
				class=" flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white "
				data-collapse-toggle="dropdown-example" aria-expanded="false"
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  mr-4"> <FaImages/></span>
				
				
				<svg class="animate-bounce w-6 h-6 flex mt-4 ml-2 ">
					<FaAngleDown/>
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
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace/></span>
				</div>
			</a>
		</li>
		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<a
				href="/messages"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText/></span>
			</div>
			</a>
		</li>

		<li class="w-full py-4 hover:shadow-xl hover:bg-blue-100 dark:hover:bg-gray-700">
			<a
				href="/category"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch/></span>
			</div>
			</a>
		</li>
	</div>


	

	</ul>
</div>


