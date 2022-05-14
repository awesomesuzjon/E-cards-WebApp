<script>
	export let left = 100;
	export let top = 100;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
</script>
<section on:mousedown={onMouseDown}   style="left:{left}px; top:{top}px;" class="draggable select-none cursor-move absolute"  id="test">
	<slot></slot>
</section>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp}  />


