<!-- <script>
	import Konva from 'konva';
	import { getContext, onDestroy } from 'svelte';

	export let x;
	export let y;
	export let someText;
	export let id;
let selectedText = '';
	const { getLayer } = getContext('konva_layer');
	const layer = getLayer();

    var Text = new Konva.Text({
		x: 50,
		y: 50,
		fontSize: 18,
		fill: 'green',
		text: someText,
		draggable: true,
		id: someText
	});
layer.add(Text)
  
		var previousTarget = null;

		var transformer = new Konva.Transformer();
		layer.add(transformer);
		layer.add(transformer);

		layer.add();

		stage.on('click tap', function (e) {
			if (e.target === previousTarget || e.target === stage) {
				
				transformer.destroy();
				transformer = new Konva.Transformer();
				layer.add(transformer);
				previousTarget = null;
				return;
			}
	
			transformer.attachTo(e.target);
			previousTarget = e.target;
		});
	
	
</script>

<style>
	#uniqueIdentifier {
		background: blue;
	}
</style> -->
<script>
	import Konva from 'konva';
	import { getContext, onDestroy } from 'svelte';
	import stage from '$lib/stage.svelte';

	export let x;
	export let y;
	export let someText;
	export let id;
	let selectedText = '';
	const { getLayer } = getContext('konva_layer');
	const layer = getLayer();

	let Text = new Konva.Text({
		x: 50,
		y: 50,
		fontSize: 18,
		fill: 'green',
		text: someText,
		draggable: true,
		id: someText
	});
	layer.add(Text);
	let textArray = [{ ...Text.attrs }];
	console.log('id is ' + textArray);
	layer.add(Text);
	onDestroy(() => circle.destroy());

	var MIN_WIDTH = 10;
	var tr = new Konva.Transformer({
		nodes: [Text],
		anchorStroke: 'red',
		anchorSize: 20,
		padding: 20,
		borderEnabled: true,
		visible: true,

		// enable only side anchors
		enabledAnchors: [
			'middle-left',
			'middle-right',
			'top-left',
			'top-right',
			'bottom-left',
			'bottom-right'
		],

		// limit transformer size
		boundBoxFunc: (oldBox, newBox) => {
			if (newBox.width < MIN_WIDTH) {
				return oldBox;
			}
			return newBox;
		}
	});
	layer.add(tr);

	layer.draw();

	Text.on('transform', () => {
		Text.setAttrs({
			width: Math.max(Text.width() * Text.scaleX(), MIN_WIDTH),
			scaleX: 1,
			scaleY: 1
		});
	});
	Text.on('click', (e) => {
		const selected = textArray.filter((data) => data['id'] === e.target.id());
		selectedText = selected[0].id || '';
		console.log('selected text id is' + selectedText);
	});

	// var Text = new Konva.Text({
	// 		x: 50,
	// 		y: 50,
	// 		fontSize: 18,
	// 		fill: 'green',
	// 		text: 'someText',
	// 		draggable: true,
	// 		id: someText
	// 	});
	// 	layer.add(Text);

	// 	var previousTarget = null;

	// 	var transformer = new Konva.Transformer();
	// 	layer.add(transformer);

	// stage.on('click tap', function (e) {
	// 		if (e.target === previousTarget || e.target === stage) {
	// 			transformer.destroy();
	// 			transformer = new Konva.Transformer();
	// 			layer.add(transformer);
	// 			previousTarget = null;
	// 			return;
	// 		}

	// 		transformer.attachTo(e.target);
	// 		previousTarget = e.target;
	// 	});
	
</script>

<style>
	#uniqueIdentifier {
		background: blue;
	}
</style>
