<script>
	import Konva from 'konva';
	import { onMount, setContext } from 'svelte';

	let container;
	let stage;
	// let layersArr = [];
	onMount(() => {
		stage = new Konva.Stage({
			container: 'container',
			width: 525,
			height: 434,

			stroke: 'blue',
			backgroundColor: 'black'
		});
		//get layers attrs
		let layerData = stage.getLayers();
		console.log(layerData);
		// layersArr = layersArr.push(stage.getLayers());
		// console.log(layersArr, 'is layers data');
		// let layer = layersArr[0];
		// let children = layer.getChildren();
		// let text = children[0];
		// console.log(text.getAttr), 'is the konva text element attribute';
	});

	setContext('konva', {
		getStage: () => stage
	});
</script>

<div bind:this={container} id="container" class="absolute top-50 left-50">
	{#if container}
		<slot />
	{/if}
</div>
