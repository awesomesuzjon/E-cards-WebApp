<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	import { selected } from '../../stores/selectedItemId';
	import { getContext, onDestroy } from 'svelte';
	import jsPDF from 'jspdf';
	import { object_without_properties } from 'svelte/internal';

	const { getStage } = getContext('konva');
	const { getLayer } = getContext('konva_layer');
	onMount(() => {
		const stage = getStage();
		const layer = getLayer();

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

			stage.setPointersPositions(e);
			Konva.Image.fromURL(itemURL, function (image) {
				layer.add(image);

				image.position(stage.getPointerPosition());
				image.draggable(true);
			});

			//code for  transformer i.e rectangular boundary around elements on click

			var previousTarget = null;

			var transformer = new Konva.Transformer();

			layer.add(transformer);

			stage.on('click tap', function (e) {
				if (e.target === previousTarget || e.target === stage) {
					transformer.destroy();
					transformer = new Konva.Transformer();
					layer.add(transformer);
					e.target.moveToBottom();
					e.target.setZIndex(3);
					$selected = null;
					previousTarget = null;
					return;
				}
				$selected = e.target;
				transformer.attachTo(e.target);
				e.target.moveToTop();
				previousTarget = e.target;

				// let elementArray = Object.entries($selected)
			});

			function downloadURI(uri, name) {
				var link = document.createElement('a');
				link.download = name;
				link.href = uri;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}

			document.getElementById('saveAsImg').addEventListener(
				'click',
				function () {
					var dataURL = stage.toDataURL({ pixelRatio: 3 });
					downloadURI(dataURL, 'stage.png');
				},
				false
			);

			//save canvas into pdf format
			document.getElementById('saveAsPdf').addEventListener('click', function () {
				var pdf = new jsPDF('l', 'px', [stage.width(), stage.height()]);
				pdf.setTextColor('#000000');
				// first add texts
				stage.find('Text').forEach((text) => {
					const size = text.fontSize() / 0.75; // convert pixels to points
					pdf.setFontSize(size);
					pdf.text(text.text(), text.x(), text.y(), {
						baseline: 'top',
						angle: -text.getAbsoluteRotation()
					});
				});

				// then put image on top of texts (so texts are not visible)
				pdf.addImage(stage.toDataURL({ pixelRatio: 2 }), 0, 0, stage.width(), stage.height());

				pdf.save('canvas.pdf');
			});
		});
	});
</script>
