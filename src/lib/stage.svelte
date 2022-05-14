<script>
	import Konva from 'konva';
	import { onMount, setContext } from 'svelte';

	let container;
	let stage;

	onMount(() => {
		stage = new Konva.Stage({
			container: container,
			width: 680,
			height: 300
		});
	});
	setContext('konva', {
		getStage: () => stage
	});

	
</script>

<div bind:this={container} class="absolute top-50 left-50">
	{#if container}
		<slot />
	{/if}
</div>
