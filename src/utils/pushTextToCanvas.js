import { textStore } from '../stores/storeText';
import { msgStore } from '../stores/storeText';
import selected from '../lib/addToCanvas/message/messageTabs.svelte'

export function pushTextToCanvasFunc() {
	var textCanvas = [];
	var i, slen, inputText, text;
	inputText = document.getElementById('addNew').value;
	textCanvas.push(inputText);

	slen = textCanvas.length;
	let storeArrayText = [];
	textStore.subscribe((storeText) => {
		storeArrayText = [...storeText];
	});
	textStore.set([...storeArrayText, inputText]);
}

export function pushMsgToCanvasFunc() {
	var textCanvas = [];
	var  slen, inputMsg;
	inputMsg = document.getElementById('addNewMsg').value;
	textCanvas.push(inputMsg);

	slen = textCanvas.length;
	let storeArrayMsg = [];
	msgStore.subscribe((storeMsg) => {
		storeArrayMsg = [...storeMsg];
	});
	msgStore.set([...storeArrayMsg, inputMsg]);
	inputMsg = document.getElementById('addNewMsg').value = '';
	storeArrayText = [];
	 selected=''

	
}

	

//close the modal on click on add button 
