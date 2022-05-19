<script>
import DashboardTemplateElement from '$lib/dashboardTemplateElement.svelte';
import DashboardChartElement from '$lib/dashboardChartElement.svelte';
import DashboardCategoryElement from '../lib/dashboardCategoryElement.svelte';
import DashboardMessageElement from '$lib/dashboardMessageElement.svelte';
import DashboardStickerElement from '../lib/dashboardStickerElement.svelte';
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
 




