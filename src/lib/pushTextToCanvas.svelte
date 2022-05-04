<script context="module">
	import { textStore } from '../stores/storeText';
	var textCanvas = [];
	export function pushTextToCanvasFunc() {
		var i, slen, inputText, text;
		inputText = document.getElementById('addNew').value;
		textCanvas.push(inputText);

		slen = textCanvas.length;

		// text = '';
		// for (i = 0; i < slen; i++) {
		// 	text += '<div>' + textCanvas[i] + '</div>';
		// }
		// text += '';

		// document.getElementById('textRotate').innerHTML = text;
		let storeArrayText = [];
		textStore.subscribe((storeText) => {
			console.log(storeText);
			storeArrayText = storeText;
		});
		textStore.set([...storeArrayText, inputText]);
	}

	//
	// document.getElementById(ev).querySelector('.child')
</script>
