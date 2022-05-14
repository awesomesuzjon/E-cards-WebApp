<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	export let someText;

	onMount(() => {
		var width = 800;
		var height = 800;

		var stage = new Konva.Stage({
			container: container,
			width: width,
			height: height
		});

		var layer = new Konva.Layer();
		stage.add(layer);

		var Text = new Konva.Text({
			x: 50,
			y: 50,
			fontSize: 18,
			fill: 'green',
			text: someText,
			draggable: true,
			id: someText
		});
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
