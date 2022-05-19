<script>
	import Konva from 'konva';
	import { onMount, setContext } from 'svelte';
	import layer from '$lib/layer.svelte';

	let container;
	let stage;

	onMount(() => {
		stage = new Konva.Stage({
			container: 'container',
			width: 640,
			height: 430
		});
	});
	setContext('konva', {
		getStage: () => stage
	});
</script>

<div bind:this={container} id="container" class="absolute top-50 left-50">
<!-- <div  id="container" class="bg-blue-500 absolute top-50 left-50"> -->
	{#if container}
	
		<slot />
	{/if}
</div>
