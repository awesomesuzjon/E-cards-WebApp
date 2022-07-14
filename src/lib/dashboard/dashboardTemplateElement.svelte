<script>
	import MdTrendingUp from 'svelte-icons/md/MdTrendingUp.svelte';
	import MdFileDownload from 'svelte-icons/md/MdFileDownload.svelte';
	var trendingCount = 30
	var downloadCount=1000
</script>

<div
	class="  p-4 shadow-customBoxShadow   rounded-box  row-span-2  col-start-1 row-start-1  dark:bg-gray-800 dark:text-gray-300    box-border    
	hover:shadow-customHoverBoxShadow
  text-base font-normal  "
	href="/templates1"
>
	<a href="/trendingTemplatesTableRoute">
		<h6
			class="text-black text-2xl  font-extrabold dark:text-gray-100 dark:hover:text-gray-400 hover:text-red-700"
		>
			Templates
		</h6>
	</a>

	<div class="flex flex-row justify-between ">
		<div class="p-8 ">
			<h3 class="text-3xl text-black font-extrabold my-4 dark:text-gray-100" id="count">{trendingCount}+</h3>
			<h2 class="w-20 font-extrabold  dark:text-gray-100"><MdTrendingUp /></h2>
			<h6 class="text-black text-sm dark:text-gray-100">Trending</h6>
			<span class="stat-desc dark:text-gray-100">Jan 1st - Feb 1st</span>
		</div>

		<div class="p-8">
			<h3 class="text-3xl text-black font-extrabold my-4 dark:text-gray-100">{downloadCount}+</h3>
			<h2 class="w-20 font-extrabold  dark:text-gray-100"><MdFileDownload /></h2>
			<h6 class="text-black text-sm dark:text-gray-100">Downloads</h6>
			<span class="stat-desc dark:text-gray-100">Jan 1st - Feb 1st</span>
		</div>
	</div>
</div>
