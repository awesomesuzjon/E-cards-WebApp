
	import { selected } from '../stores/selectedItemId';
	let subscribe = false;

	export function editFontSize() {
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
	}

	export function editTextColor() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}
			const colorInput = document.getElementById('colorInput').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				stroke : colorInput,
			});
			subscribe = false;
			unSubscribe();
		});
	}

	export function editRotateText() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			if (!subscribe) {
				return;
			}
			const rotationInput = document.getElementById('inputDegree').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				rotateText:rotationInput

			});
			subscribe = false;
			unSubscribe();
		});
	}



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

	//rotate the selected text

	export function rotateText() {
		var inputRotate = document.getElementById('inputRotate').value;
		document.getElementById('uniqueIdentifier').style.transform = 'rotate(' + inputRotate + 'deg)';
		document.getElementById('uniqueIdentifier').style.background = 'red';
	}

