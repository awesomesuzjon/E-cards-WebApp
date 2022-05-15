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
	
		var Text = new Konva.Text({
				x: 50,
				y: 50,
				fontSize: 18,
				fill: 'green',
				text: 'someText',
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
	
</script>

<style>
	#uniqueIdentifier {
		background: blue;
	}
</style>
