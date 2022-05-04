<script>
	import interact from 'interactjs';
	import { onMount } from 'svelte';
	onMount(() => {
		interact('.resizable').resizable({
			edges: { top: true, left: true, bottom: true, right: true },
			listeners: {
				move: function (event) {
					let { x, y } = event.target.dataset;

					x = (parseFloat(x) || 0) + event.deltaRect.left;
					y = (parseFloat(y) || 0) + event.deltaRect.top;

					Object.assign(event.target.style, {
						width: `${event.rect.width}px`,
						height: `${event.rect.height}px`,
						transform: `translate(${x}px, ${y}px)`
					});

					Object.assign(event.target.dataset, { x, y });
				}
			}
		});
	});
</script>

	<slot></slot>
 <style>
	/*  .resizable {
		width: 120px;
		border-radius: 0.75rem;
		border: 2px solid black;
		padding: 20px;
		margin: 1rem;
		font-size: 20px;
		overflow: hidden;
		touch-action: none;
		box-sizing: border-box;
	}  */


</style> 
