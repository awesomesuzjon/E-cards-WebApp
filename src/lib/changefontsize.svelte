<script context="module">
import { createEventDispatcher, onMount } from "svelte";
import { setContext, getContext } from 'svelte';

   export function changeTextSize() {
  var input = document.getElementById('input').value;
  document.getElementById('text').style.fontSize = input + "px"; 
  // document.getElementById('text').style.background= input;
}


export function getCoordinatesByElementId(elementId, callback) {
   let el = document.getElementById(elementId)
   let elCoordinates = el.getBoundingClientRect();
   console.log(el);
   console.log('position testing')
   console.log(elCoordinates);
   let xaxis = elCoordinates.x;
   let yaxis = elCoordinates.y;
   callback(xaxis, yaxis);
   console.log(yaxis);
}

 
</script>


