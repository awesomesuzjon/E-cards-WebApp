<script context="module">
import { createEventDispatcher, onMount } from "svelte";
import { setContext, getContext } from 'svelte';

   export function changeTextSize() {
  var input = document.getElementById('input').value;
  document.getElementById('canvasText').style.fontSize = input + "px"; 
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


export function rotateText() {
  var inputRotate = document.getElementById('inputRotate').value;
//   document.getElementById("textRotate").style.transformOrigin = "50% 50%"
  document.getElementById("textRotate").style.transform = "rotate(" + inputRotate + "deg)"

    }

 


</script>


