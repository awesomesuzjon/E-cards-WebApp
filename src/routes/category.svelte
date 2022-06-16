<script>
	import CategoryTable from '../lib/reusable/categoryTable.svelte';
	import Button from '../lib/reusable/button.svelte';
</script>

<svelte:head>
	<title>Category</title>
</svelte:head>

<a href="/addCategory" class="p-0 text-sm flex self-end justify-end mr-5 my-4" title="Bold"
	><Button>
		<span class="font-bold "> Add a new Category +</span>
	</Button></a
>

<CategoryTable />
