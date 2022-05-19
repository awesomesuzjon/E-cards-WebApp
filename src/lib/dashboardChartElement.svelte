<script>
import Chart from '$lib/chart.svelte';

</script>

<div class="shadow-customBoxShadow h-68 text-center row-start-1 col-start-2 col-span-2 row-span-2  dark:bg-gray-800  dark:text-gray-300   rounded-box box-border      flex items-center justify-center text-base font-normal" > 
     
    <div class="w-2/3 h-auto object-fill ">
    <canvas id="myChart"  class=" relative" >
      <Chart/>
      </canvas>
    </div>
  
  </div> 