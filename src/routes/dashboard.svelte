<script>
import DashboardTemplateElement from '$lib/dashboard/dashboardTemplateElement.svelte';
import DashboardChartElement from '$lib/dashboard/dashboardChartElement.svelte';
import DashboardCategoryElement from '../lib/dashboard/dashboardCategoryElement.svelte';
import DashboardMessageElement from '$lib/dashboard/dashboardMessageElement.svelte';
import DashboardStickerElement from '../lib/dashboard/dashboardStickerElement.svelte';
</script>

<svelte:head>
   <title>Dashboard</title>
  </svelte:head>

<div class="grid grid-cols-3  gap-10 grid-flow-grid  mx-8 mt-8   ">
 <DashboardTemplateElement/>
 <DashboardChartElement/>
 <DashboardMessageElement/>
 <DashboardCategoryElement/>
 <DashboardStickerElement/>
   </div>
 




