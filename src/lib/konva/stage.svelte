<script>
	import Konva from 'konva';
	import { onMount, setContext } from 'svelte';

	let container;
	let stage;

	onMount(() => {
		stage = new Konva.Stage({
			container: 'container',
			width: 525,
			height: 434,

			stroke: 'blue',
			backgroundColor: 'black'
		});
		console.log('stage created');
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
