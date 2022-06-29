<script>
	import Konva from 'konva';
	import { onMount, setContext } from 'svelte';

	let container;
	let stage;
	// let layersArr = [];
	onMount(() => {
		stage = new Konva.Stage({
			container: 'container',
			width: 678,
			height: 450,

			stroke: 'blue',
			backgroundColor: 'black'
		});
		//get layers attrs
		let layerData = stage.getLayers();
		console.log(layerData);
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
