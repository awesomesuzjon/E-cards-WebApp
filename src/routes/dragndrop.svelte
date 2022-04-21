<script>
import Draggable from "$lib/Draggable.svelte";

	let name = 'world';
	
	let drop_zone;
	let objects = [
		{ el: null, id: 1 }
	];
	
	let dropped = [];
	let status = '';
	
	let dropped_in = '';
	let activeEvent = '';
  let originalX = '';
  let originalY = '';
	
	function handleDragEnter(e) {
        status = "You are dragging over the " + e
            .target
            .getAttribute('id');
    }

    function handleDragLeave(e) {
        status = "You left the " + e
            .target
            .getAttribute('id');
    }

    function handleDragDrop(e) {
        e.preventDefault();
        var element_id = e
            .dataTransfer
            .getData("text");
				dropped = dropped.concat(element_id);
        dropped_in = true;
        status = "You droped " + element_id + " into drop zone";
    }
	
		function handleDragStart(e) {
        status = "Dragging the element " + e
        	.target
          .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer
         .setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {
    	if (dropped_in == false) {
      	status = "You let the " + e
        	.target
          .getAttribute('id') + " go.";
    	}
      dropped_in = false;
    }

    function handleTouchStart(e) {
    	status = "Touch start with element " + e
      	.target
        .getAttribute('id');
      originalX = (e.target.offsetLeft - 10) + "px";
      originalY = (e.target.offsetTop - 10) + "px";
      activeEvent = 'start';
    }

    function handleTouchMove(e) {
    	let touchLocation = e.targetTouches[0];
    	let pageX = Math.floor((touchLocation.pageX - 50)) + "px";
    	let pageY = Math.floor((touchLocation.pageY - 50)) + "px";
    	status = "Touch x " + pageX + " Touch y " + pageY;
    	e.target.style.position = "absolute";
    	e.target.style.left = pageX;
    	e.target.style.top = pageY;
    	activeEvent = 'move';
    }

    function handleTouchEnd(e) {
    	e.preventDefault();
    	if (activeEvent === 'move') {
      	let pageX = (parseInt(e.target.style.left) - 50);
      	let pageY = (parseInt(e.target.style.top) - 50);

      	if (detectTouchEnd(drop_zone.offsetLeft, drop_zone.offsetTop, pageX, pageY, drop_zone.offsetWidth, drop_zone.offsetHeight)) {
        	dropped = dropped.concat(e.target.id);
        	e.target.style.position = "initial";
        	dropped_in = true;
        	status = "You dropped " + e
          	.target
          	.getAttribute('id') + " into drop zone";
        } else {
        	e.target.style.left = originalX;
        	e.target.style.top = originalY;
        	status = "You let the " + e
          	.target
          	.getAttribute('id') + " go.";
        }
      }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
    	//Very simple detection here
    	if (x2 - x1 > w) 
      	return false;
    	if (y2 - y1 > h) 
      	return false;
    	return true;
    }
</script>

<h1>Drop Zone</h1>

<Draggable>
<div 
	on:dragenter={handleDragEnter} 
	on:dragleave={handleDragLeave}  
	on:drop={handleDragDrop} 
	bind:this={drop_zone} 
	id="drop_zone" 
	ondragover="return false"
>
	{#each objects.filter(v => dropped.includes(`${v.id}`)) as {id}, i}
	
		<div class="objects" id={id} style="cursor: auto">
			Object {id}
		</div>
	
	{/each}
</div>
</Draggable>


{#each objects.filter(v => !dropped.includes(`${v.id}`)) as { id }, i}
	<div 
		id="{id}"
		class="objects" 
		draggable=true 
		bind:this={objects[i].el}
		on:dragstart={handleDragStart}
		on:dragend={handleDragEnd}
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
	>
		Object { id }
	</div>
{/each}

<style>
	
	:global(html), :global(body) {
		margin: 0; 
		height: 100%; 
		overflow: hidden;
		user-select: none;
		-webkit-user-select: none;
	}

	#drop_zone {
    background-color: #eee;
    border: #999 1px solid ;
    width: 280px;
    height: 200px;
    padding: 8px;
    font-size: 19px;
  }
  
  .objects {
    display: inline-block;
    background-color: #FFF3CC;
    border: #DFBC6A 1px solid;
    width: 50px;
    height: 50px;
    margin: 10px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    box-shadow: 2px 2px 2px #999;
    cursor: move;
  }
</style>