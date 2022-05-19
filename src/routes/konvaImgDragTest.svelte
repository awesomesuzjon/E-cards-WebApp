<script>
	import Konva from 'konva';
import { onMount } from 'svelte';
import { selected } from '../stores/selectedItemId';

	
	var width = 2450;
	var height = 800;

	onMount(()=>{

	var stage = new Konva.Stage({
		container: 'container',
		width: width,
		height: height
	});
	var layer = new Konva.Layer();
	stage.add(layer);

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
<div id="drag-items" class="m-2 p-4 flex flex-row gap-4" >
	<img class="w-24" src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" draggable="true" />
	<img class="w-24" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYW5nZXxlbnwwfHwwfHw%3D&w=1000&q=80" draggable="true" />
  </div>
  <div id="container" class="bg-gray-600 p-4 m-6"> </div>