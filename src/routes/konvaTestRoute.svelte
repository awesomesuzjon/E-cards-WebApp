<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	export let someText;
	export let containerId;

	onMount(() => {
		var width = 800;
		var height = 800;

		var stage = new Konva.Stage({
			container: 'container',
			width: width,
			height: height
		});

		var layer = new Konva.Layer();
		stage.add(layer);

		var layer2 = new Konva.Layer();
		stage.add(layer2);

		var rect1 = new Konva.Rect({
			x: 60,
			y: 60,
			width: 100,
			height: 90,
			fill: 'red',
			draggable: true
		});
		layer.add(rect1);

		var rect2 = new Konva.Rect({
			x: 250,
			y: 100,
			width: 150,
			height: 90,
			fill: 'green',
			draggable: true
		});
		layer.add(rect2);
		var star = new Konva.Star({
			x: stage.width() / 2,
			y: stage.height() / 2,
			draggable: true,
			numPoints: 5,
			innerRadius: 20,
			outerRadius: 40,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 4
		});

    var Text = new Konva.Text({
		x: 50,
		y: 50,
		fontSize: 18,
		fill: 'green',
		text: "someText",
		draggable: true,
		id: someText
	});
layer.add(Text)

		var previousTarget = null;

		var transformer = new Konva.Transformer();
		layer.add(transformer);
		layer.add(transformer);
		// transformer.attachTo(star);

		layer2.add(star);
		// layer2.draw();

		stage.on('click tap', function (e) {
			// if click on empty area - remove all transformers
			if (e.target === previousTarget || e.target === stage) {
				// let rectTransformer = stage.find('.rectTransformer').destroy();
				// layer.draw();
				transformer.destroy();
				transformer = new Konva.Transformer();
				layer.add(transformer);
				previousTarget = null;
				return;
			}
			// do nothing if clicked NOT on our rectangles
			// if (!e.target.hasName('rect')) {
			// 	return;
			// }
			// remove old transformers
			// TODO: we can skip it if current rect is already selected
			// let rectTransfermer = stage.find('.rectTransformer');
			// rectTransfermer.destroy();

			// create new transformer
			// var tr = new Konva.Transformer({ name: 'rectTransformer' });
			// layer.add(tr);
			transformer.attachTo(e.target);
			previousTarget = e.target;
			// layer.draw();
		});
	});
</script>

<div id="container" />
