<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	export let someText;
	export let id;
	import { getContext, onDestroy } from 'svelte';


	
	const { getStage } = getContext("konva");
	const { getLayer } = getContext('konva_layer');


	
	onMount(() => {
		
		
		const stage = getStage();

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
		console.log(id);
		layer.add(Text);

		var previousTarget = null;

		var transformer = new Konva.Transformer();
		layer.add(transformer);

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
	});
</script>

<div id="container" />
