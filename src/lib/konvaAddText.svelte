<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	import { selected } from '../stores/selectedItemId';
	import { v4 as uuid } from 'uuid';
	// import { canvasBgStore } from '../stores/canvasColor.js';
	// console.log(JSON.stringify(canvasBgStore))
	import { textStore } from '../stores/storeText';
	// export let someText;

	import { getContext } from 'svelte';

	const { getStage } = getContext('konva');
	const { getLayer } = getContext('konva_layer');
	const stage = getStage();
	const layer = getLayer();
	onMount(() => {
		textStore.subscribe((data) => {
			var text = new Konva.Text({
				x: 50,
				y: 50,
				fontSize: 18,
				fill: 'black',
				text: !data.length ? '' : data[data.length - 1],
				draggable: true,
				id: uuid(),
				fontFamily: 'arial'
			});

			layer.add(text);
		});
		// 	var background = new Konva.Rect({
		//     x: 0,
		//     y: 0,
		//     width: stage.width(),
		//     height: stage.height(),
		// 	// fill:canvasBgStore,
		// 	fill:'cyan',
		// 	listening:false,
		// })
		// layer.add(background);
		// console.log(canvasBgStore,'konva color value');

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
		});

		function downloadURI(uri, name) {
			var link = document.createElement('a');
			link.download = name;
			link.href = uri;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}

		//   function konvaColorChange(){
		// 	  var colorBgBtnUpdated = document.getElementById('colorBgBtn').addEventListener(onclick,()=>{

		// 		  var canvasBgValueUpdated = document.getElementById(colorBginput).value
		// 		  console.log(canvasBgValueUpdated,'updated value');
		// 	  })
		//   }
		//   konvaColorChange()

		document.getElementById('saveAsImg').addEventListener(
			'click',
			function () {
				var dataURL = stage.toDataURL({ pixelRatio: 3 });
				downloadURI(dataURL, 'MyNewCanvas.png');
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
</script>
