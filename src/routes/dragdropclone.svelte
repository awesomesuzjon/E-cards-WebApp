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
			let storeArrayText;
			var dragElementCopy = dragElement.cloneNode(true);

			// for draggable Sticker

			draggableStoreSticker.subscribe((store) => {
				storeArray = store;
			});
			draggableStoreSticker.set([...storeArray, dragElementCopy]);

			// for draggable text

			// draggableStoreText.subscribe(storeText=>{
			//     storeArrayText = storeText;
			// });
			// draggableStoreText.set([...storeArrayText, dragElementCopy]);

			// let element = document.createElement("div").setAttribute("class","cloneDestinationDivClass");
			// document.getElementById("test").appendChild(element);
			//  ev.target.appendChild(nodeCopy);
			ev.stopPropagation();
		}
		console.log(data);
		ev.preventDefault();

		return false;
	}
</script>
