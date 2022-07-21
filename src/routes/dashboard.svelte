<script>
	import { onMount } from 'svelte';
	import DashboardTemplateElement from '$lib/dashboard/dashboardTemplateElement.svelte';
	import DashboardChartElement from '$lib/dashboard/dashboardChartElement.svelte';
	import DashboardCategoryElement from '../lib/dashboard/dashboardCategoryElement.svelte';
	import DashboardMessageElement from '$lib/dashboard/dashboardMessageElement.svelte';
	import DashboardStickerElement from '../lib/dashboard/dashboardStickerElement.svelte';
	import Spinner from 'svelte-spinner';
	let isPageLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 2000);
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

{#if !isPageLoaded}
	<div class="text-lg spinnerClass text-black  flex flex-col justify-center item-center">
		<Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
		<span class="text-red-700 text-lg ">Loading...</span>
	</div>
{:else}
	<div
		class="grid grid-cols-3 xl:gap-8  gap-2 grid-flow-grid  mx-8 2xl:gap-24 2xl:mt-12 mt-2 dark:bg-gray-700  "
	>
		<DashboardTemplateElement />
		<DashboardChartElement />
		<DashboardMessageElement />
		<DashboardCategoryElement />
		<DashboardStickerElement />
	</div>
{/if}

<style>
	.spinnerClass {
		position: absolute;
		top: 50%;
		left: 50%;
	}
</style>
