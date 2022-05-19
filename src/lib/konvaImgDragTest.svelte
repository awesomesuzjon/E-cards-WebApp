<script>
	import Konva from 'konva';
import { onMount } from 'svelte';
import { selected } from '../stores/selectedItemId';
import { getContext, onDestroy } from 'svelte';

const { getStage } = getContext('konva');
	const { getLayer } = getContext('konva_layer');


		onMount(() => {
		const stage = getStage();

		const layer = getLayer();
 



	// what is url of dragging element?
	var itemURL = '';
	document.getElementById('drag-items').addEventListener('dragstart', function (e) {
		itemURL = e.target.src;
	});

	var con = stage.container();
	con.addEventListener('dragover', function (e) {
		e.preventDefault(); // !important
	});

	con.addEventListener('drop', function (e) {
		e.preventDefault();
		// now we need to find pointer position
		// we can't use stage.getPointerPosition() here, because that event
		// is not registered by Konva.Stage
		// we can register it manually:
		stage.setPointersPositions(e);

		Konva.Image.fromURL(itemURL, function (image) {
			layer.add(image);

			image.position(stage.getPointerPosition());
			image.draggable(true);
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

	});

</script>
