<script>
	import Konva from 'konva';
import { onMount } from 'svelte';
	
	var width = 850;
	var height = 600;

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
	});
})

</script>
<div id="drag-items" class="m-2 p-4 " >
	<img class="w-24" src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" draggable="true" />
  </div>
  <div id="container" class="bg-gray-600 p-4 m-6"> </div>