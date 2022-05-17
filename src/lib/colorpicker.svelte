<script context="module">
import {selected } from '../stores/selectedItemId';

let subscribe = false;

export function changeColorOfCanvasText() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			if (!subscribe) {
				return;
			}
			
			const colorInput = document.getElementById('colorInput').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
        fill:`#(colorInput)`
			});
			subscribe = false;
			unSubscribe();
		});
	}

  

 
 export function changeCanvasBgColorFunc() {
   var colorinput = document.getElementById('colorBginput').value;
   document.getElementById('canvasText').style.backgroundColor = colorinput; 
 }

 export function revertCanvasBgColorFunc() {
   document.getElementById('canvasText').style.backgroundColor = ""; 
 }
 

 
 
 
 
 </script>