import { selected } from '../stores/selectedItemId';
let subscribe = false;

export function StrokeWidth() {
	subscribe = true;
	const unSubscribe = selected.subscribe((data) => {
		// console.log(data);
		if (!subscribe) {
			return;
		}
		const strokeInputValue = document.getElementById('strokeWidthInput').value;
		if (data == null) {
			return;
		}
		data.setAttrs({
			StrokeWidth: strokeInputValue
	
		});
		subscribe = false;
		unSubscribe();
	});
}

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

	//new function to open editbar on click of element on the canvas
	export function setLabelonClickedElement(){
		var newLabel = document.createElement('label');
		newLabel.htmlFor = 'my-drawer-4';
		selected.wrap('<label  for ="my-drawer-4"></label')
		// newLabel.appendChild(selected);

		// newLabel.setAttribute('for', "my-drawer-4");
		//to be done for="my-drawer-4" above or try innerhtml
		console.log(newLabel);

		// selected.InnerHTML = `Next  <label for="my-drawer-4"></label>`
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
					fill : colorInput
			});
			subscribe = false;
			unSubscribe();
		});
	}

	export function editTextOpacity() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}
			const opacityValue = document.getElementById('opacityInput').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
					opacity : opacityValue
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
			const rotationInput = document.getElementById('inputRotateDegree').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				
				rotationDeg: rotationInput,
			});
			subscribe = false;
			unSubscribe();
		});
	}

	export function editElementPosition() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}
			const positionXInput = document.getElementById('positionX').value;
			const positionYInput = document.getElementById('positionY').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				X: positionXInput,
				Y: positionYInput
			});
			subscribe = false;
			unSubscribe();
		});
	}


	export function deleteTarget() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// console.log(data);
			if (!subscribe) {
				return;
			}

			if (data == null) {
				return;
			}
			data.setAttrs({
				visible : false,
				
				
			});

			subscribe = false;
			unSubscribe();
		});
	}
