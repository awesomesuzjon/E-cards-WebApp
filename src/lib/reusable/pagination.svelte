<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	export let paginatedItems;
	export let items;
	//pagination code
	let currentPage = 2;

	// var items = [];
	// items = items.push(Stickers);
	// console.log(items, 'is the item arr data');

	let pageSize = 2;

	$: paginatedItems = paginate({ items, pageSize, currentPage });
	console.log(paginatedItems, 'is the pagination data');
	// console.log();
</script>


<section class="text-sm">
	<LightPaginationNav
		totalItems={items.length}
		currentPage="currentPage"
		limit={2}
		{pageSize}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</section>
<section class="flex justify-center items-center text-sm  text-black ">
	<span>Rows per Page:</span>
	<select bind:value={pageSize} class="text-black text-sm ">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
	</select>
</section>
