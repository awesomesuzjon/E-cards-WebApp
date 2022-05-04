<!-- <script>
import { documentId } from "firebase/firestore";
import { onMount } from "svelte";

onMount(()=>{


const el = document.getElementById('zzz')
el.addEventListener("mousedown", mousedown)



function mousedown(e){

    window.addEventListener("mousemove", mousemove);

    window.addEventListener("mouseup", mouseup);



    let prevX = e.clientX;

    let prevY = e.clientY;



    function mousemove(e){

        let newX = prevX - e.clientX;

        let newY = prevY - e.clientY;



        const rect = el.getBoundingClientRect();



        el.style.left = rect.left - newX + "px";

        el.style.top = rect.top - newY + "px";



        prevX = e.clientX;

        prevY = e.clientY;

    }



    function mouseup(){

        window.removeEventListener("mousemove", mousemove);

        window.removeEventListener("mouseup", mouseup);

    }

}
})


</script> -->

<!-- <div id="zzz" />

<style>
	#zzz {
		height: 50px;
		width: 50px;
		position: absolute;
		background: red;
		overflow: auto;
		resize: both;
	}
</style> -->

<!-- 
<script>
import { onMount } from "svelte";

onMount(()=>{

    document.body.addEventListener('click',(e)=>{
    var currentTarget = e.target;
        console.log(currentTarget);
        
    })
})
        
        
        function changeFontSize() {
      var inputhere = document.getElementById('inputhere').value;
    currentTarget.style.fontSize = inputhere + "px"; 
       
     }

</script>

<input type="input" id="inputhere" class="bg-red-400 mt-8">
<button class="btn" on:click={changeFontSize}>changeFontSize</button>

<div id="tagHead">hello</div>
<div id="tagparagrah">its me</div> -->



<script>
import Resize from "$lib/resize.svelte";
import { onMount } from "svelte";

onMount(()=>{

    const elmnt = document.getElementById("myDIV");
let width =elmnt.offsetWidth;
console.log(width); 
})
</script>

<Resize>
<div id="myDIV" class="resizable border-2 w-50">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, optio!</p>
</div>

</Resize>

