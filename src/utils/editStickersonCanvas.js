
	import { selected } from '../stores/selectedItemId';
	let subscribe = false;

	export function editStickerSize() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// (data);
			if (!subscribe) {
				return;
			}
			const stickerWidth = document.getElementById('stickerWidth').value;
			const stickerHeight = document.getElementById('stickerHeight').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				width: parseInt(stickerWidth),
				height: parseInt(stickerHeight)
		
			});
			subscribe = false;
		});
	}



	export function editRotateSticker() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			if (!subscribe) {
				return;
			}
			const rotationInput = document.getElementById('inputRotateSticker').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				
				rotationDeg: rotationInput,
			});
			subscribe = false;
		});
	}

	export function editStickerPosition() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// (data);
			if (!subscribe) {
				return;
			}
			const positionXInput = document.getElementById('stickerPositionX').value;
			const positionYInput = document.getElementById('stickerPositionY').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				X: positionXInput,
				Y: positionYInput

			});
			subscribe = false;
		});
	}


	export function editStickerOpacity() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// (data);
			if (!subscribe) {
				return;
			}
			const opacityStickerValue = document.getElementById('opacityStickerInput').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
					opacity : opacityStickerValue
			});
			subscribe = false;
			// unSubscribe();
		});
	}