<script>
    import Draggable from "$lib/Draggable.svelte";
import Resize from "$lib/resize.svelte";
import Rotate from "$lib/rotate.svelte";
;
</script>


<Rotate>
<Draggable>
    <Resize>
<div class="rotatable resizable "><p>Lorem, ipsum dolor.</p></div>
</Resize>
</Draggable>
</Rotate>

<style>
    .rotatable{
        border:2px solid black;
        padding:10px;
    }

</style>