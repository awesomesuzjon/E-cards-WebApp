<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	import { selected } from '../stores/selectedItemId';
	import { v4 as uuidv4 } from 'uuid';
	export let someText;

	import { getContext, onDestroy } from 'svelte';
import { text } from 'svelte/internal';

	const { getStage } = getContext('konva');
	const { getLayer } = getContext('konva_layer');

	onMount(() => {
		const stage = getStage();

		const layer = getLayer();
 
		
		var text = new Konva.Text({
			x: 50,
			y: 50,
			fontSize: 18,
			fill: 'black',
			text: someText,
			draggable: true,
			id: 'text',
			fontFamily:'arial',
		});

		// $selected = text;
		layer.add(text);

		var itemURL = '';
		var Img = document.getElementById('drag-items');
        Img.addEventListener('dragstart', function (e) {
          itemURL = e.target.src;
		  
        });

		// var con = stage.container

		// con.addEventListener('dragover',function(e){
		// 	e.preventDefault();
		// })

		// con.addEventListener('drop',function(e){
		// 	e.preventDefault();
		// 	stage.setPointersPositions(e);
		// 	Konva.Image.fromURL(itemURL,function(image){
		// 		layer.add(image);
		// 		image.position(stage.getPointerPosition());
		// 		image.draggable(true);
		// 	})
		// })

		var previousTarget = null;

		var transformer = new Konva.Transformer();
		// transformer.keepRatio(true);
		layer.add(transformer);
		// Text.fontSize = 40;

		stage.on('click tap', function (e) {
			if (e.target === previousTarget || e.target === stage) {
				transformer.destroy();
				transformer = new Konva.Transformer();
				layer.add(transformer);
				$selected = null;
				previousTarget = null;
				return;
			}
			// text.fill = 'red';
			// selected.set(e.target);
			$selected = e.target;
			transformer.attachTo(e.target);
			previousTarget = e.target;

			const eventTargetId = e.target.attrs.id;
		});
	});

	export function changeTextFontSize(size) {
		$selected.setAttrs({
			fontSize: size
		});
	}
</script>

<div id="container" />
