<script>
import { cloneElementFunc } from "$lib/cloneElement.svelte";

import { onMount } from "svelte";



   

        function cloneimg(){
  const node = document.getElementById("clonedElement");
  const clone = node.cloneNode(true);
  document.getElementById("cloneHoldContainer").appendChild(clone);
}
            
        
        
</script>


<button class="btn" on:click={cloneElementFunc} >clone </button>


<!-- <div class="flex ">
<ul id="cloneHoldContainer"  class="border-4 border-black p-5 width-50 h-auto">

</ul>
<br>
<ul id="clonedElement">
    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" class="w-16 h-16" alt="">

</ul>
</div>   -->

