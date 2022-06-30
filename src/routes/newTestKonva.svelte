<script>
	import { onMount } from 'svelte';
	import Konva from 'konva';

	onMount(() => {
		// var stage = new Konva.Stage({
		// 	container: 'container',
		// 	width: 500,
		// 	height: 400
		// });

		// var layer = new Konva.Layer();

		// var hexagon = new Konva.RegularPolygon({
		// 	x: 500 / 2,
		// 	y: 400 / 2,
		// 	sides: 6,
		// 	radius: 70,
		// 	fill: 'red',
		// 	stroke: 'black',
		// 	strokeWidth: 4
		// });

		// add the shape to the layer
		// layer.add(hexagon);

		// add the layer to the stage

		// save stage as a json string
		var json = {
			attrs: { width: 500, height: 400 },
			className: 'Stage',
			children: [
				{
					attrs: {},
					className: 'Layer',
					children: [
						{
							attrs: {
								x: 250,
								y: 200,
								sides: 6,
								radius: 100,
								fill: 'green',
								stroke: 'black',
								strokeWidth: 4
							},
							className: 'RegularPolygon'
						}
					]
				}
			]
		};
		var stage = Konva.Node.create(json, 'container');
		stage.add(layer);

		console.log(json);
	});
</script>

<slot>
	<div id="container" />
</slot>
