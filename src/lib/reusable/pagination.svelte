<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	export let paginatedItems;
	export let items;

	let currentPage = 1;

	let pageSize = 2;

	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<section class="text-sm dark:bg-gray-800">
	<LightPaginationNav
		totalItems={items.length}
		currentPage="currentPage"
		limit={4}
		{pageSize}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</section>
