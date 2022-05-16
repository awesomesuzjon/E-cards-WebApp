<script context="module">
	import Konva from 'konva';
	import { createEventDispatcher, onMount } from 'svelte';
	import { setContext, getContext } from 'svelte';
	import { eventArray, selected } from '../stores/selectedItemId';
	// import { changeTextFontSize } from '../lib/konvaTestRoute.svelte';
	let subscribe = false;
	export function changeTextSize() {
		let shape;
		// selected.subscribe((data) => {
		// 	var input = document.getElementById('input').value;
		// 	console.log('data', data);
		// 	data.attrs.fontSize = parseInt(input);
		// });
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}
			const input = document.getElementById('input').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				fontSize: parseInt(input)
			});
			subscribe = false;
			unSubscribe();
		});

		//   var canvas =document.getElementById('canvasText')
		//   canvas.addEventListener('click',(e)=>{
		// var target = e.target;
		//     console.log(target);
		// console.log('herherher', document.getElementById(shape));
		// document.getElementById(shape).style.fontSize = input + 'px';
		// console.log(eventArray, 'in changefont page');
	}
	// )}

	export function getCoordinatesByElementId(elementId, callback) {
		let el = document.getElementById(elementId);
		let elCoordinates = el.getBoundingClientRect();
		console.log(el);
		console.log('position testing');
		console.log(elCoordinates);
		let xaxis = elCoordinates.x;
		let yaxis = elCoordinates.y;
		callback(xaxis, yaxis);
		console.log(yaxis);
	}

	export function rotateText() {
		var inputRotate = document.getElementById('inputRotate').value;
		//   document.getElementById("textRotate").style.transformOrigin = "50% 50%"
		document.getElementById('uniqueIdentifier').style.transform = 'rotate(' + inputRotate + 'deg)';
		document.getElementById('uniqueIdentifier').style.background = 'red';
	}
</script>
