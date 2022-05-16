<script context="module">

import { createEventDispatcher, onMount } from "svelte";
import { setContext, getContext } from 'svelte';


   export function changeTextSize() {

//     document.getElementById('canvasText').addEventListener('click',(e)=>{
// var target = e.target.id;
//     console.log(target);
// })




    
  var input = document.getElementById('input').value;
  // document.getElementsById().style.fontSize = input + "px"; 
  console.log("the id here is " + selectedText); 

      
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
  document.getElementById("uniqueIdentifier").style.transform = "rotate(" + inputRotate + "deg)"
  document.getElementById("uniqueIdentifier").style.background = "red";


    }




</script>


