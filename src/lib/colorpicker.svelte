<script context="module">
    export function click() {
   var colorinput = document.getElementById('colorinput').value;
   document.getElementById('textRotate').style.color = colorinput; 
   // document.getElementById('text').style.background= input;
 }
 

 export function changeCanvasBgColorFunc() {
   var colorinput = document.getElementById('colorBginput').value;
   document.getElementById('canvasText').style.backgroundColor = colorinput; 
   // document.getElementById('text').style.background= input;
 }
 


 export function revertCanvasBgColorFunc() {
   document.getElementById('canvasText').style.backgroundColor = ""; 
 }
 

 
 
 
 
 </script>