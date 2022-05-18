<script context="module">
	import { selected } from '../stores/selectedItemId';
	let subscribe = false;
	export function editTextStyles() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}
			const input = document.getElementById('input').value;
			const fontInput = document.getElementById('fontInput').value;
			const colorInput = document.getElementById('colorInput').value;
			const rotationInput = document.getElementById('inputDegree').value;
			console.log(rotationInput	)
			if (data == null) {
				return;
			}
			data.setAttrs({
				fontSize: parseInt(input),
				fontFamily: fontInput,
				stroke : colorInput,
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
</script>
