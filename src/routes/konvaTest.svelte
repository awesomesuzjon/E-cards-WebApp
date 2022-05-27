<script>
	import Konva from 'konva';
	import { onMount } from 'svelte';

	onMount(() => {
		const stage = new Konva.Stage({
			container: 'container',
			width: 800,
			height: 800
		});
		const layer = new Konva.Layer();
		stage.add(layer);
		const circle = new Konva.Circle({
			x: stage.width() / 2,
			y: stage.height() / 2,
			radius: 50,
			fill: 'green',
			opacity: 0.1,
			draggable: false
		});
		const group = new Konva.Group({ draggable: true, fill: 'pink' });
		const bg = new Konva.Rect({
			fill: 'yellow',
			name: 'background',
			x: stage.width() / 2 - (circle.width() + 32) / 2,
			y: stage.height() / 2 - (circle.height() + 32) / 2,
			width: circle.width() + 32,
			height: circle.height() + 32,
			opacity: 0,
			position: circle.position(),
			offsetX: (circle.width() + 32) / 2,
			offsetY: (circle.height() + 32) / 2
		});
		group.add(circle);
		const transformer = new Konva.Transformer({
			node: circle,
			borderDash: [4, 3],
			anchorCornerRadius: 5,
			anchorStrokeWidth: 15,
			borderStrokeWidth: 1,
			padding: 16,
			keepRatio: false,
			opacity: 0,
			enabledAnchors: ['top-right', 'top-left'],
			anchorFill: '#29A9E5',
			rotationSnaps: [0, 90, 180, 270],
			rotateAnchorOffset: 16
		});

		var starC = new Konva.Star({
			x: 475,
			y: 175,
			numPoints: 20,
			innerRadius: 90,
			outerRadius: 100,
			stroke: 'orange',
			fill: 'yellow'
		});
		layer.add(starC);

		transformer.attachTo(circle);
		var buttons = {
			rotater: {
				path: '<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>box-configurator-rotate</title><circle cx="8" cy="8" r="8" style="fill:#fff"/><path d="M0.9,0.5c0.1,0,0.3,0.1,0.3,0.3L1.1,2.9c1-1.4,2.6-2.4,4.5-2.4c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3c-1.4,0-2.6-0.5-3.6-1.4c-0.1-0.1-0.1-0.3,0-0.4L2.3,9c0.1-0.1,0.3-0.1,0.4,0c0.7,0.7,1.7,1.1,2.8,1.1c2.3,0,4.2-1.9,4.2-4.2S7.8,1.7,5.5,1.7c-1.7,0-3.2,1-3.8,2.5l2.7-0.1c0.1,0,0.3,0.1,0.3,0.3v0.6c0,0.1-0.1,0.3-0.3,0.3H0.3C0.1,5.2,0,5.1,0,4.9V0.8c0-0.1,0.1-0.3,0.3-0.3H0.9z"/></svg>',

				shape: transformer.findOne('.rotater')
			},
			top_left: {
				path: '<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>box-configurator-transform</title><circle cx="8" cy="8" r="8" style="fill:#fff"/><path d="M.07,3.66v-3A.58.58,0,0,1,.65.07h3A.29.29,0,0,1,4,.36V.94a.29.29,0,0,1-.29.29H1.23V3.66A.29.29,0,0,1,.94,4H.36A.29.29,0,0,1,.07,3.66Zm7-3.3V.94a.29.29,0,0,0,.29.29H9.77V3.66a.29.29,0,0,0,.29.29h.58a.29.29,0,0,0,.29-.29v-3a.58.58,0,0,0-.58-.58h-3A.29.29,0,0,0,7.05.36Zm3.59,6.69h-.58a.29.29,0,0,0-.29.29V9.77H7.34a.29.29,0,0,0-.29.29v.58a.29.29,0,0,0,.29.29h3a.58.58,0,0,0,.58-.58v-3A.29.29,0,0,0,10.64,7.05ZM4,10.64v-.58a.29.29,0,0,0-.29-.29H1.23V7.34a.29.29,0,0,0-.29-.29H.36a.29.29,0,0,0-.29.29v3a.58.58,0,0,0,.58.58h3A.29.29,0,0,0,4,10.64Z"/></svg>',
				shape: transformer.findOne('.top-left')
			},

			top_right: {
				path: '<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>box-configurator-delete</title><circle cx="8" cy="8" r="8" style="fill:#fff"/><path d="M10.24,1.08v.66a.39.39,0,0,1-.36.36H1.12a.39.39,0,0,1-.36-.36V1.08A.39.39,0,0,1,1.12.72H3.64L3.82.3A.52.52,0,0,1,4.24,0h2.4a.61.61,0,0,1,.48.3L7.3.72H9.82C10.06.78,10.24.9,10.24,1.08ZM1.42,2.82h8.1V9.91a1.05,1.05,0,0,1-1,1H2.44a1.05,1.05,0,0,1-1-1ZM3.1,9.19a.39.39,0,0,0,.36.36.39.39,0,0,0,.36-.36V4.44a.39.39,0,0,0-.36-.36.39.39,0,0,0-.36.36Zm2,0a.36.36,0,0,0,.72,0V4.44a.36.36,0,1,0-.72,0Zm2,0a.36.36,0,0,0,.72,0V4.44a.36.36,0,0,0-.72,0Z"/></svg>',
				shape: transformer.findOne('.top-right')
			}
		};
		for (var button in buttons) {
			var shape = buttons[button].shape;
			var selector = button.replace('_', '-');
			var icon = new Konva.Path({
				fill: 'black',
				data: buttons[button].path,
				name: selector + '-icon'
			});
			icon.position(shape.position());
			icon.x(shape.x());
			icon.y(shape.y());
			transformer.add(icon);
			if (selector == 'top-right') {
				shape.listening(false);
				icon.on('click', () => {
					console.log('deleted');
					circle.destroy();
				});
			} else if (selector == 'rotater') {
				shape.listening(false);
				icon.on('click', () => {
					console.log('rotater click');
					circle.destroy();
				});
			}
		}
		circle.on('transform', function () {
			transformer.update();
			for (var button in buttons) {
				var selector = button.replace('_', '-');
				var shape = transformer.findOne('.' + selector);
				var icon = transformer.findOne('.' + selector + '-icon');
				icon.position(shape.position());
				icon.x(icon.x() - 5.25);
				icon.y(icon.y() - 5.25);
				layer.batchDraw();
			}
		});
		group.add(transformer);
		group.on('mouseenter', function () {
			stage.container().style.cursor = 'move';
			transformer.opacity(1);
			bg.opacity(1);
			layer.draw();
		});
		group.on('mouseleave', function () {
			stage.container().style.cursor = 'default';
		});
		layer.add(group);
		layer.draw();
	});
</script>

<div id="container" />
