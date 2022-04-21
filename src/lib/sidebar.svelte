<script>
  import FaHome from 'svelte-icons/fa/FaHome.svelte'
  import FaImages from 'svelte-icons/fa/FaImages.svelte'
  import FaRegGrimace from 'svelte-icons/fa/FaRegGrimace.svelte'
  import IoMdText from 'svelte-icons/io/IoMdText.svelte'
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte'






	// let files;
	let firstName = [];
	$: fullName = `${firstName}`; 

//upload a new theme template from the local device
	let files = []
  $: file = files[0]


</script>


<div
	class="px-8  overflow-y-auto rounded bg-gray-100 dark:bg-gray-800 h-screen   pt-10 pb-10 w-1/6  text-center relative min-h-screen  flex  sidebarxx    "
>
	<ul class="space-y-0 divide-y border-3 border w-full">
		<li class="w-full py-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700">
			<a
				href="/dashboard"
				class="w-full   flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaHome/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Dashboard</span>
				</div>
				</a>
		</li>
		<li class="w-full py-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700">
			<button 
				type="button"
				class=" flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white "
				data-collapse-toggle="dropdown-example" aria-expanded="false"
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaImages/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Templates</span>
			</div>
			</button>

			<ul id="dropdown-example" class="hidden py-2 space-y-2">
				<li>
					<a
						href="/trendingtemplates"
						class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 "
						>Trending E-cards</a
					>
				</li>
				<li>
					<a
						href="/mostdownloadedtemplates"
						class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 "
						>Most Downloaded
					</a>
				</li>
				<li>
					<a
						href="/communitytemplates"
						class="hover:shadow-xl flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 "
						>Community E-cards</a
					>
				</li>
			</ul>


		</li>

		<li class="w-full py-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700">
			<a
				href="/stickers"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
				<div class="flex items-center align-middle">
				
					<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaRegGrimace/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Stickers</span>
				</div>
			</a>
		</li>
		<li class="w-full py-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700">
			<a
				href="/messages"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <IoMdText/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">  Messages</span>
			</div>
			</a>
		</li>

		<li class="w-full py-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700">
			<a
				href="/category"
				class=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
			>
			<div class="flex items-center align-middle">
				
				<span class="mt-3 ml-3 w-6 h-6 flex  "> <FaSearch/></span><span class="whitespace-nowrap mt-3 ml-4 center flex">Categories</span>
			</div>
			</a>
		</li>
	</ul>
</div>


