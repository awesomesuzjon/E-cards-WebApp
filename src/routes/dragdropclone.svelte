<script context="module">
	import { draggableStoreSticker } from '../stores/storeStickers.js';

	export function allowDrop(ev) {
		ev.preventDefault();
	}

	export function drag(ev) {
		ev.dataTransfer.setData('text', ev.target.getAttribute('id'));
	}

	export function drop(ev) {
		var data = ev.dataTransfer.getData('text');
		let dragElement = document.getElementById(data);
		if (dragElement != null) {
			let storeArray = [];
			console.log(storeArray);
			var dragElementCopy = dragElement.cloneNode(true);

			// for draggable Sticker

			draggableStoreSticker.subscribe((store) => {
				storeArray = store;
			});
			draggableStoreSticker.set([...storeArray, dragElementCopy]);
			ev.stopPropagation();
		}
		ev.preventDefault();

		return false;
	}
</script>
