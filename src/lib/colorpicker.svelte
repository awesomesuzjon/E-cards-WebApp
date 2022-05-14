<script context="module">
    export function click(stage, id) {
   var colorinput = document.getElementById('colorinput').value;
   var colorchoosed=document.getElementById('canvasInput').style.color = colorinput; 
   var colorchoosed=document.getElementById('uniqueIdentifier').style.background = colorinput; 
   
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