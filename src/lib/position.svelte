<script >
import { onMount } from "svelte";

    let xaxis;
    let yaxis;
onMount(() =>{
            let el = document.getElementById('box')
      let elCoordinates = el.getBoundingClientRect();
        xaxis = elCoordinates.x;
         yaxis = elCoordinates.y;
        

    })

</script>

<div class=" bg-green-800 w-80 h-80 relative" >
<div id="box" class="absolute w-20  h-20 top-0 left-20 bg-red-800 " >
</div> 
</div>

X-Axis =    <h1>{xaxis}</h1>
Y-Axis =    <h1>{yaxis}</h1>

<!-- 

function positionfunc(){
    let xaxis;
        let yaxis;
              let el = document.getElementById('box')
        let elCoordinates = el.getBoundingClientRect();
        xaxis = elCoordinates.x;
           yaxis = elCoordinates.y;
           alert(yaxis)
           console.log(xaxis)
      } -->
  