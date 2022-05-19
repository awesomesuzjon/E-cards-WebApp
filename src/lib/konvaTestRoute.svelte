<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	import { selected } from '../stores/selectedItemId';
	import { v4 as uuidv4 } from 'uuid';
	export let someText;

	import { getContext, onDestroy } from 'svelte';

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

		var previousTarget = null;

		var transformer = new Konva.Transformer();
		layer.add(transformer);

		stage.on('click tap', function (e) {
			if (e.target === previousTarget || e.target === stage) {
				transformer.destroy();
				transformer = new Konva.Transformer();
				layer.add(transformer);
				$selected = null;
				previousTarget = null;
				return;
			}
			$selected = e.target;
			transformer.attachTo(e.target);
			previousTarget = e.target;

			const eventTargetId = e.target.attrs.id;
		});
	});


</script>

