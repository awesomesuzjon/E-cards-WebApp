<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';
	import { selected } from '../../stores/selectedItemId';
	import { v4 as uuid } from 'uuid';
	import { textStore } from '../../stores/storeText';
	import { getContext } from 'svelte';
	import { canvasBgStore } from '../../stores/canvasColor';
	const { getStage } = getContext('konva');
	const { getLayer } = getContext('konva_layer');
	const stage = getStage();
	const layer = getLayer();
	import { setLabelonClickedElement } from '../../utils/editTextonCanvas';
	import { documentId } from 'firebase/firestore';
	import { each } from 'svelte/internal';

	var imgSavedArray = [];

	onMount(() => {
		canvasBgStore.subscribe((color) => {
			var backgroundRect = new Konva.Rect({
				x: 0,
				y: 0,
				zIndex: 0,
				// fillPatternImage: images.bgImage,
				width: stage.width(),
				height: stage.height(),
				fill: color,
				opacity: 0.5,
				listening: false
				// 		fillLinearGradientStartPoint: { x: -50, y: -50 },
				//   fillLinearGradientEndPoint: { x: 50, y: 50 },
				//   fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
			});
			// image.src='admin.jpg';
			layer.add(backgroundRect);
		});
		textStore.subscribe((data) => {
			var text = new Konva.Text({
				x: 50,
				y: 50,
				zIndex: 3,
				fontSize: 18,
				fill: 'black',
				text: !data.length ? '' : data[data.length - 1],
				draggable: true,
				id: 'textElementId',
				listening: true

				// fontFamily: 'arial',
				// // stroke: 'red',
				// // strokeWidth: 2,
				// // shadowColor: 'black',
				// // shadowBlur: 0,
				// // shadowOffset: { x: 10, y: 15 },
				// // shadowOpacity: 0.5
			});
			text.moveToTop();

			text.setZIndex(3);
			layer.add(text);
		});

		//konva add image as background
		Konva.Image.fromURL(`ktm.jpg`, function (bgImage) {
			bgImage.setAttrs({
				x: 0,
				y: 0,
				width: stage.width(),
				height: stage.height()
			});
			// layer.add(bgImage);
		});

		//transformer for each clicked element on canvas
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

		// if ($selected.attrs.id === IdonCanvas);
		stage.on('click', function (e) {
			var IdonCanvas = e.target.attrs.id;

			var editPanel = document.getElementById('editPanelDiv');
			if (IdonCanvas == 'textElementId' && (editPanel.style.visibility = 'invisible')) {
				console.log(IdonCanvas, 'is the elements id on canvas');

				editPanel.style.visibility = 'visible';
			} else {
				editPanel.style.visibility = 'invisible';
				console.log('open stickers');
			}
		});

		//save img url on localstorage

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
				// imgSavedArray.push(dataURL);
				downloadURI(dataURL, 'MyNewCanvas.png');
				//saving img data url on localStorage
				// for (i = 0; i < imgSavedArray[i].length; i++) {
				// localStorage.setItem('recentImage', imgSavedArray[i]);

				localStorage.setItem('recentImage', dataURL);
				const recentImageDataUrl = localStorage.getItem('recentImage');
				document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl);
			},
			false
		);
	});

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
</script>

<!-- if (3 == 1);
			console.log(IdonCanvas, 'is the elements id on canvas');
			{
				var editPanel = document.getElementById('editPanelDiv');
				if ((editPanel.style.visibility = 'invisible')) {
					editPanel.style.visibility = 'visible';
				} else if ((editPanel.style.visibility = 'visible')) {
					editPanel.style.visibility = 'invisible';
				}
			}
		}); -->
