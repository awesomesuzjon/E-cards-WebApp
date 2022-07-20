<script>
	import TemplatesTable from '../lib/tables/templatesTable.svelte';
	import CreateTemplateBtn from '../lib/reusable/createTemplateBtn.svelte';
	import { globalUrl } from '../utils/urls';
	import { onMount } from 'svelte';

	//category dropdown
	let categoryOptionArr = [];
	let categoryOptions = `${globalUrl}/category/show-name-list`;
	onMount(() => {
		fetch(categoryOptions).then((res) => {
			res.json().then((data) => {
				categoryOptionArr = data?.categoryList ?? [];
				// categoryArr = data;
			});
		});
	});
</script>

<svelte:head>
	<title>All Templates</title>
</svelte:head>
<CreateTemplateBtn />

<TemplatesTable />
